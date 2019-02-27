import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer/SearchContainer'
import WeatherCardContainer from './components/WeatherCardContainer/WeatherCardContainer'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      searchInput: '',
      weatherResponse: []
    }
  }

  handleUserInput = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true },
      this.getForecastData(this.state.searchInput))
  }

  getForecastData = (city) => {
    fetch('http://localhost:5000/getWeather',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer',
        body: JSON.stringify({ city })
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          this.setState({ loading: false, weatherResponse: data })
        }
      })
      .catch(err => {
        console.log('err: ', err)
        this.setState({ loading: false })
        window.alert('Incorrect City Entered')
      })
  }

  render() {
    return (
      <div className='App'>
        <SearchContainer handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit} searchInput={this.state.searchInput} loading={this.state.loading}/>
        {this.state.weatherResponse.length > 0 && !this.state.loading &&
          <WeatherCardContainer weatherResponse={this.state.weatherResponse}  />}
      </div>
    );
  }
}

export default App;
