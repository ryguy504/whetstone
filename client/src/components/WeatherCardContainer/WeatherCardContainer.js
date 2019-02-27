import React, { Component } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import Button from '@material-ui/core/Button';
import './WeatherCardContainer.css'

class WeatherCardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            NumCardsToShow: 5
        }
    }
    changeNumberOfCards = (numCards) => {
        this.setState({ NumCardsToShow: numCards })
    }
    determineIcon = (weatherId) => {
        if (weatherId <= 232){
            // thunderstorm
            return <i className='fas fa-bolt fa-5x'></i>
        } else if (weatherId >= 300 && weatherId <= 531) {
            // rain
            return <i className='fas fa-cloud-showers-heavy fa-5x rainy'></i>
        } else if(weatherId >= 600 && weatherId <= 622) {
            // snow
            return <i className='fas fa-snowflake fa-5x snow'></i>
        } else if(weatherId === 800) {
            // clear/sunny
            return <i className='fas fa-sun fa-5x sunny'></i>
        } else if (weatherId >= 801 && weatherId <= 804) {
            // cloudy
            return <i className='fas fa-cloud-sun fa-5x cloudy'></i>
        } else {
            return <i className='fas fa-question fa-5x'></i>
        }
    }
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='offset-md-4 col-12 col-md-4 d-flex justify-content-around  pt-5'>
                        <Button variant={this.state.NumCardsToShow === 1 ? 'outlined' : 'contained'} classes={{ contained: 'x-day-bttn' }} onClick={() => this.changeNumberOfCards(1)}>1 day</Button>
                        <Button variant={this.state.NumCardsToShow === 5 ? 'outlined' : 'contained'} classes={{ contained: 'x-day-bttn' }} onClick={() => this.changeNumberOfCards(5)}>5 day</Button>
                    </div>
                    <div className='col-12 pt-5'>
                        {this.props.weatherResponse &&
                        this.props.weatherResponse.slice(0, this.state.NumCardsToShow).map((weatherData, i) => {
                                return <WeatherCard key={i} data={weatherData} determineIcon={this.determineIcon}/>
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCardContainer
