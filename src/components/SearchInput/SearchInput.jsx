import React, { useState } from 'react'
import { Search, MapPin, RefreshCw, ToggleLeft, ToggleRight, Heart, User } from 'lucide-react'
import { useWeatherContext } from '../../context/WeatherContext'
import { useAuth } from '../../context/AuthContext'
import { useGeolocation } from '../../hooks/useGeolocation'
import { useWeatherByCoords } from '../../hooks/useWeather'
import { useQueryClient } from '@tanstack/react-query'
import {
    SearchContainer,
    SearchForm,
    SearchInputWrapper,
    StyledInput,
    SearchIconWrapper,
    SearchButton,
    ActionButton,
    ButtonGroup,
    SavedCitiesDropdown,
    CityItem,
    AuthButton
} from './SearchInput.styles'

const SearchInput = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')
    const [showSavedCities, setShowSavedCities] = useState(false)
    const { units, toggleUnits, currentCity, savedCities, removeCity } = useWeatherContext()
    const { user, setShowAuthModal } = useAuth()
    const { coords, loading: geoLoading, error: geoError, getLocation } = useGeolocation()
    const { data: geoWeatherData } = useWeatherByCoords(coords)
    const queryClient = useQueryClient()

    React.useEffect(() => {
        if (geoWeatherData?.name) {
            onSearch(geoWeatherData.name)
        }
    }, [geoWeatherData, onSearch])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchValue.trim()) {
            onSearch(searchValue.trim())
            setSearchValue('')
            setShowSavedCities(false)
        }
    }

    const handleRefresh = () => {
        if (currentCity) {
            queryClient.invalidateQueries(['weather', currentCity])
            queryClient.invalidateQueries(['forecast', currentCity])
        }
    }

    const handleLocationClick = () => {
        getLocation()
    }

    const handleSavedCityClick = (city) => {
        onSearch(city.name)
        setShowSavedCities(false)
    }

    const handleRemoveCity = (e, cityId) => {
        e.stopPropagation()
        removeCity(cityId)
    }

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInputWrapper>
                    <SearchIconWrapper>
                        <Search size={20} />
                    </SearchIconWrapper>
                    <StyledInput
                        type="text"
                        placeholder="Enter city name..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowSavedCities(false)}
                    />
                    <SearchButton type="submit">
                        Search
                    </SearchButton>
                </SearchInputWrapper>
            </SearchForm>

            <ButtonGroup>
                <ActionButton
                    onClick={handleLocationClick}
                    disabled={geoLoading}
                    title="Use my location"
                >
                    <MapPin size={18} />
                    {geoLoading ? 'Getting location...' : 'My Location'}
                </ActionButton>

                <ActionButton
                    onClick={handleRefresh}
                    disabled={!currentCity}
                    title="Refresh weather data"
                >
                    <RefreshCw size={18} />
                    Refresh
                </ActionButton>

                <ActionButton onClick={toggleUnits} title="Toggle temperature units">
                    {units === 'metric' ? <ToggleLeft size={18} /> : <ToggleRight size={18} />}
                    {units === 'metric' ? '°C' : '°F'}
                </ActionButton>

                {savedCities.length > 0 && (
                    <ActionButton
                        onClick={() => setShowSavedCities(!showSavedCities)}
                        title="Saved cities"
                    >
                        <Heart size={18} />
                        Saved ({savedCities.length})
                    </ActionButton>
                )}

                <AuthButton onClick={() => setShowAuthModal(true)}>
                    <User size={18} />
                    {user ? user.email : 'Sign In'}
                </AuthButton>
            </ButtonGroup>

            {showSavedCities && savedCities.length > 0 && (
                <SavedCitiesDropdown>
                    <h4>Saved Cities</h4>
                    {savedCities.map(city => (
                        <CityItem key={city.id} onClick={() => handleSavedCityClick(city)}>
                            <span>{city.name}, {city.country}</span>
                            <button onClick={(e) => handleRemoveCity(e, city.id)}>×</button>
                        </CityItem>
                    ))}
                </SavedCitiesDropdown>
            )}
        </SearchContainer>
    )
}

export default SearchInput