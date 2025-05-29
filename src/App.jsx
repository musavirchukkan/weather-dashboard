import React, { useEffect } from 'react'
import { WeatherProvider, useWeatherContext } from './context/WeatherContext'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout/Layout'
import SearchInput from './components/SearchInput/SearchInput'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import ForecastDisplay from './components/ForecastDisplay/ForecastDisplay'
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import AuthModal from './components/Auth/AuthModal'
import { useWeather, useForecast } from './hooks/useWeather'
import { AppContainer, Header, ControlsContainer } from './App.styles'

const Dashboard = () => {
  const { currentCity, lastSearchedCity, updateCity } = useWeatherContext()
  const {
    data: weatherData,
    error: weatherError,
    isLoading: weatherLoading
  } = useWeather(currentCity)
  const {
    data: forecastData,
    error: forecastError
  } = useForecast(currentCity)

  useEffect(() => {
    if (lastSearchedCity && !currentCity) {
      updateCity(lastSearchedCity)
    }
  }, [lastSearchedCity, currentCity, updateCity])

  const handleSearch = (city) => {
    updateCity(city)
  }

  const error = weatherError || forecastError

  return (
    <Layout>
      <AppContainer>
        <Header>
          <h1>Weather Dashboard</h1>
          <p>Get real-time weather updates for any city</p>
        </Header>

        <ControlsContainer>
          <SearchInput onSearch={handleSearch} />
        </ControlsContainer>

        {error && <ErrorDisplay error={error} />}

        {weatherLoading && currentCity && <LoadingSpinner />}

        {weatherData && !error && (
          <>
            <WeatherDisplay data={weatherData} />
            {forecastData && <ForecastDisplay data={forecastData} />}
          </>
        )}

        {!weatherLoading && !weatherData && !error && !currentCity && (
          <div style={{
            textAlign: 'center',
            color: 'white',
            marginTop: '3rem',
            fontSize: '1.1rem'
          }}>
            Search for a city to see weather information
          </div>
        )}
      </AppContainer>
      <AuthModal />
    </Layout>
  )
}

function App() {
  return (
    <AuthProvider>
      <WeatherProvider>
        <Dashboard />
      </WeatherProvider>
    </AuthProvider>
  )
}

export default App