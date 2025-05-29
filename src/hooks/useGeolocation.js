import { useState, useEffect } from 'react'

export const useGeolocation = () => {
    const [location, setLocation] = useState({
        loading: false,
        error: null,
        coords: null,
    })

    const getLocation = () => {
        if (!navigator.geolocation) {
            setLocation({
                loading: false,
                error: 'Geolocation is not supported by your browser',
                coords: null,
            })
            return
        }

        setLocation({
            loading: true,
            error: null,
            coords: null,
        })

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    loading: false,
                    error: null,
                    coords: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    },
                })
            },
            (error) => {
                let errorMessage = 'Unable to retrieve your location'

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Location permission denied'
                        break
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable'
                        break
                    case error.TIMEOUT:
                        errorMessage = 'Location request timed out'
                        break
                }

                setLocation({
                    loading: false,
                    error: errorMessage,
                    coords: null,
                })
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        )
    }

    return { ...location, getLocation }
}