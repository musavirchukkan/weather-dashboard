// Format time from Unix timestamp
export const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
}

// Format date
export const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    })
}

// Group forecast data by day
export const groupForecastByDay = (forecastList) => {
    return forecastList.reduce((acc, forecast) => {
        const date = new Date(forecast.dt * 1000).toDateString()
        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push(forecast)
        return acc
    }, {})
}

// Convert temperature
export const convertTemp = (temp, toUnit) => {
    if (toUnit === 'imperial') {
        return (temp * 9 / 5) + 32
    }
    return (temp - 32) * 5 / 9
}

// Convert wind speed
export const convertWindSpeed = (speed, toUnit) => {
    if (toUnit === 'imperial') {
        return speed * 2.237 // m/s to mph
    }
    return speed / 2.237 // mph to m/s
}

// Get weather icon URL
export const getWeatherIconUrl = (iconCode, size = '2x') => {
    return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`
}

// Get wind direction
export const getWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const index = Math.round(degrees / 22.5) % 16
    return directions[index]
}

// Format visibility
export const formatVisibility = (visibility) => {
    const km = visibility / 1000
    return km >= 10 ? 'Excellent' : km >= 5 ? 'Good' : km >= 2 ? 'Moderate' : 'Poor'
}

// Get UV index level
export const getUVLevel = (uvi) => {
    if (uvi <= 2) return { level: 'Low', color: '#10b981' }
    if (uvi <= 5) return { level: 'Moderate', color: '#f59e0b' }
    if (uvi <= 7) return { level: 'High', color: '#ef4444' }
    if (uvi <= 10) return { level: 'Very High', color: '#dc2626' }
    return { level: 'Extreme', color: '#7c3aed' }
}

// Get humidity level
export const getHumidityLevel = (humidity) => {
    if (humidity < 30) return 'Low'
    if (humidity < 60) return 'Comfortable'
    if (humidity < 80) return 'High'
    return 'Very High'
}

// Format large numbers
export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num)
}