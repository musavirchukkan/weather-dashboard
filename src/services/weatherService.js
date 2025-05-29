import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL

const weatherAPI = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
    },
})

export const weatherService = {
    getCurrentWeather: async (city, units = 'metric') => {
        try {
            const response = await weatherAPI.get('/weather', {
                params: { q: city, units }
            })
            return response.data
        } catch (error) {
            if (error.response?.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.')
            }
            if (error.response?.status === 401) {
                throw new Error('API key issue. Please check your configuration.')
            }
            if (!navigator.onLine) {
                throw new Error('No internet connection. Please check your network.')
            }
            throw new Error('Failed to fetch weather data. Please try again.')
        }
    },

    getForecast: async (city, units = 'metric') => {
        try {
            const response = await weatherAPI.get('/forecast', {
                params: { q: city, units, cnt: 40 } // 5 days, 8 forecasts per day
            })
            return response.data
        } catch (error) {
            if (error.response?.status === 404) {
                throw new Error('City not found for forecast.')
            }
            throw new Error('Failed to fetch forecast data.')
        }
    },

    getWeatherByCoords: async (lat, lon, units = 'metric') => {
        try {
            const response = await weatherAPI.get('/weather', {
                params: { lat, lon, units }
            })
            return response.data
        } catch (error) {
            throw new Error('Failed to fetch weather by coordinates.')
        }
    },

    getForecastByCoords: async (lat, lon, units = 'metric') => {
        try {
            const response = await weatherAPI.get('/forecast', {
                params: { lat, lon, units, cnt: 40 }
            })
            return response.data
        } catch (error) {
            throw new Error('Failed to fetch forecast by coordinates.')
        }
    }
}