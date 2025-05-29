import { useQuery } from '@tanstack/react-query'
import { weatherService } from '../services/weatherService'
import { useWeatherContext } from '../context/WeatherContext'

export const useWeather = (city) => {
    const { units } = useWeatherContext()

    return useQuery({
        queryKey: ['weather', city, units],
        queryFn: () => weatherService.getCurrentWeather(city, units),
        enabled: !!city,
        retry: 2,
        retryDelay: 1000,
    })
}

export const useForecast = (city) => {
    const { units } = useWeatherContext()

    return useQuery({
        queryKey: ['forecast', city, units],
        queryFn: () => weatherService.getForecast(city, units),
        enabled: !!city,
        retry: 2,
        retryDelay: 1000,
    })
}

export const useWeatherByCoords = (coords) => {
    const { units } = useWeatherContext()

    return useQuery({
        queryKey: ['weather-coords', coords?.lat, coords?.lon, units],
        queryFn: () => weatherService.getWeatherByCoords(coords.lat, coords.lon, units),
        enabled: !!coords?.lat && !!coords?.lon,
        retry: 2,
    })
}

export const useForecastByCoords = (coords) => {
    const { units } = useWeatherContext()

    return useQuery({
        queryKey: ['forecast-coords', coords?.lat, coords?.lon, units],
        queryFn: () => weatherService.getForecastByCoords(coords.lat, coords.lon, units),
        enabled: !!coords?.lat && !!coords?.lon,
        retry: 2,
    })
}