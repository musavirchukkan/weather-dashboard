import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const WeatherContext = createContext()

export const useWeatherContext = () => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useWeatherContext must be used within WeatherProvider')
    }
    return context
}

export const WeatherProvider = ({ children }) => {
    const [units, setUnits] = useState('metric')
    const [lastSearchedCity, setLastSearchedCity] = useLocalStorage('lastCity', '')
    const [currentCity, setCurrentCity] = useState('')
    const [savedCities, setSavedCities] = useLocalStorage('savedCities', [])

    const toggleUnits = () => {
        setUnits(prev => prev === 'metric' ? 'imperial' : 'metric')
    }

    const updateCity = (city) => {
        setCurrentCity(city)
        setLastSearchedCity(city)
    }

    const saveCity = (cityData) => {
        const exists = savedCities.some(city => city.id === cityData.id)
        if (!exists) {
            setSavedCities([...savedCities, {
                id: cityData.id,
                name: cityData.name,
                country: cityData.sys.country,
                coord: cityData.coord
            }])
        }
    }

    const removeCity = (cityId) => {
        setSavedCities(savedCities.filter(city => city.id !== cityId))
    }

    const isCitySaved = (cityId) => {
        return savedCities.some(city => city.id === cityId)
    }

    return (
        <WeatherContext.Provider value={{
            units,
            toggleUnits,
            currentCity,
            updateCity,
            lastSearchedCity,
            savedCities,
            saveCity,
            removeCity,
            isCitySaved
        }}>
            {children}
        </WeatherContext.Provider>
    )
}