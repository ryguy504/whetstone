import React from 'react'
import {
    Input,
    InputLabel,
    IconButton
} from '@material-ui/core';
import './SearchContainer.css'

const SearchContainer = (props) => {
    return (
        <div className='search-container container-fluid'>
            <div className='row'>
                <div className='col-12 mt-5'>
                    <div className='search-header'>
                        <h2>Weather Forecast</h2>
                        <i className={`fas fa-sun fa-3x iconsunny ${props.loading ? 'header-icon' : null}`}></i>
                        <p>Check the weather forecast for in your area!</p>
                    </div>
                </div>
                <div className='col-12'>
                    <form onSubmit={props.handleSubmit}>
                        <InputLabel
                            classes={{ root: 'search-label'}}
                            htmlFor='search'>Search</InputLabel>
                        <Input
                            id='search'
                            value={props.searchInput}
                            onChange={props.handleUserInput}
                            autoFocus={true}
                            className='search-input mx-3'
                            placeholder='Please enter a city...'
                        />
                        <IconButton aria-label='Search by city' classes={{ label: 'search-button' }} onClick={props.handleSubmit}>
                            <i className='fas fa-search'></i>
                        </IconButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer
