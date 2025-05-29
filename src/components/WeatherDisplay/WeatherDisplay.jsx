import React from 'react'
import {
    Thermometer,
    Droplets,
    Wind,
    Eye,
    Gauge,
    MapPin,
    RefreshCw,
    Heart,
    HeartOff,
    Sunrise,
    Sunset
} from 'lucide-react'
import { useWeatherContext } from '../../context/WeatherContext'
import { formatTime } from '../../utils/weatherHelpers'
import {
    WeatherCard,
    WeatherHeader,
    CityInfo,
    LastUpdate,
    MainWeatherInfo,
    TemperatureSection,
    Temperature,
    WeatherDetails,
    DetailCard,
    DetailInfo,
    SaveButton,
    SunInfo
} from './WeatherDisplay.styles'

const WeatherDisplay = ({ data }) => {
    const { units, saveCity, removeCity, isCitySaved } = useWeatherContext()
    const tempUnit = units === 'metric' ? '°C' : '°F'
    const speedUnit = units === 'metric' ? 'm/s' : 'mph'

    const isSaved = isCitySaved(data.id)

    const handleSaveToggle = () => {
        if (isSaved) {
            removeCity(data.id)
        } else {
            saveCity(data)
        }
    }

    const sunriseTime = formatTime(data.sys.sunrise)
    const sunsetTime = formatTime(data.sys.sunset)

    return (
        <WeatherCard>
            <WeatherHeader>
                <CityInfo>
                    <h2>
                        <MapPin size={24} />
                        {data.name}, {data.sys.country}
                    </h2>
                    <p>{new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                </CityInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <SaveButton onClick={handleSaveToggle} $isSaved={isSaved}>
                        {isSaved ? <HeartOff size={20} /> : <Heart size={20} />}
                        {isSaved ? 'Unsave' : 'Save'}
                    </SaveButton>
                    <LastUpdate>
                        <RefreshCw size={16} />
                        Updated just now
                    </LastUpdate>
                </div>
            </WeatherHeader>

            <MainWeatherInfo>
                <TemperatureSection>
                    <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                        alt={data.weather[0].description}
                    />
                    <Temperature>
                        <h3>{Math.round(data.main.temp)}{tempUnit}</h3>
                        <p>{data.weather[0].main}</p>
                        <span>{data.weather[0].description}</span>
                    </Temperature>
                </TemperatureSection>

                <WeatherDetails>
                    <DetailCard>
                        <Thermometer size={24} />
                        <DetailInfo>
                            <h4>Feels Like</h4>
                            <p>{Math.round(data.main.feels_like)}{tempUnit}</p>
                        </DetailInfo>
                    </DetailCard>

                    <DetailCard>
                        <Droplets size={24} />
                        <DetailInfo>
                            <h4>Humidity</h4>
                            <p>{data.main.humidity}%</p>
                        </DetailInfo>
                    </DetailCard>

                    <DetailCard>
                        <Wind size={24} />
                        <DetailInfo>
                            <h4>Wind Speed</h4>
                            <p>{data.wind.speed} {speedUnit}</p>
                            <span>{data.wind.deg}°</span>
                        </DetailInfo>
                    </DetailCard>

                    <DetailCard>
                        <Eye size={24} />
                        <DetailInfo>
                            <h4>Visibility</h4>
                            <p>{(data.visibility / 1000).toFixed(1)} km</p>
                        </DetailInfo>
                    </DetailCard>

                    <DetailCard>
                        <Gauge size={24} />
                        <DetailInfo>
                            <h4>Pressure</h4>
                            <p>{data.main.pressure} hPa</p>
                        </DetailInfo>
                    </DetailCard>

                    <DetailCard>
                        <Thermometer size={24} />
                        <DetailInfo>
                            <h4>Min / Max</h4>
                            <p>{Math.round(data.main.temp_min)}{tempUnit} / {Math.round(data.main.temp_max)}{tempUnit}</p>
                        </DetailInfo>
                    </DetailCard>
                </WeatherDetails>
            </MainWeatherInfo>

            <SunInfo>
                <div>
                    <Sunrise size={20} />
                    <span>Sunrise: {sunriseTime}</span>
                </div>
                <div>
                    <Sunset size={20} />
                    <span>Sunset: {sunsetTime}</span>
                </div>
            </SunInfo>
        </WeatherCard>
    )
}

export default WeatherDisplay