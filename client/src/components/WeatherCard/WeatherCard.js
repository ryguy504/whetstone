import React from 'react'
import Card from '@material-ui/core/Card'
import './WeatherCard.css'

const WeatherCard = (props) => {
    return (
            <div className='card-wrapper'>
                <Card className='card p-3'>
                    <h1>{props.data.temp}&#176;F</h1>
                    <div className="m-auto">
                        {props.determineIcon(props.data.weatherID)}
                    </div>
                </Card>
            </div>
    )
}

export default WeatherCard
