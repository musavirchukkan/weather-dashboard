import React from 'react'
import { useWeatherContext } from '../../context/WeatherContext'
import { groupForecastByDay } from '../../utils/weatherHelpers'
import {
    ForecastCard,
    ForecastSection,
    ForecastGrid,
    DayCard,
    DayHeader,
    ForecastItem,
    TimeSlot,
    WeatherInfo,
    TempRange
} from './ForecastDisplay.styles'

const ForecastDisplay = ({ data }) => {
    const { units } = useWeatherContext()
    const tempUnit = units === 'metric' ? '°C' : '°F'

    // Group forecast data by day
    const dailyForecasts = groupForecastByDay(data.list)

    // Get first 5 days
    const days = Object.entries(dailyForecasts).slice(0, 5)

    return (
        <ForecastCard>
            <ForecastSection>
                <h3>5-Day Detailed Forecast</h3>
                <ForecastGrid>
                    {days.map(([date, forecasts]) => {
                        const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' })
                        const shortDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

                        // Calculate min and max temps for the day
                        const temps = forecasts.map(f => f.main.temp)
                        const minTemp = Math.round(Math.min(...temps))
                        const maxTemp = Math.round(Math.max(...temps))

                        return (
                            <DayCard key={date}>
                                <DayHeader>
                                    <h4>{dayName}</h4>
                                    <span>{shortDate}</span>
                                    <TempRange>
                                        {minTemp}{tempUnit} - {maxTemp}{tempUnit}
                                    </TempRange>
                                </DayHeader>

                                {forecasts.slice(0, 4).map((forecast) => {
                                    const time = new Date(forecast.dt * 1000).toLocaleTimeString('en-US', {
                                        hour: 'numeric',
                                        hour12: true
                                    })

                                    return (
                                        <ForecastItem key={forecast.dt}>
                                            <TimeSlot>{time}</TimeSlot>
                                            <img
                                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                                                alt={forecast.weather[0].description}
                                            />
                                            <WeatherInfo>
                                                <div className="temp">
                                                    {Math.round(forecast.main.temp)}{tempUnit}
                                                </div>
                                                <div className="desc">
                                                    {forecast.weather[0].main}
                                                </div>
                                            </WeatherInfo>
                                        </ForecastItem>
                                    )
                                })}
                            </DayCard>
                        )
                    })}
                </ForecastGrid>
            </ForecastSection>
        </ForecastCard>
    )
}

export default ForecastDisplay