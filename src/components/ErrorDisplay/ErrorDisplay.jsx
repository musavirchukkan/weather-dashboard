import React from 'react'
import { AlertCircle, WifiOff, MapPinOff, KeyRound } from 'lucide-react'
import { ErrorCard, ErrorIcon, ErrorContent, ErrorTitle, ErrorMessage } from './ErrorDisplay.styles'

const ErrorDisplay = ({ error }) => {
    const getErrorDetails = () => {
        if (error.message?.includes('City not found') || error.response?.status === 404) {
            return {
                icon: <MapPinOff size={24} />,
                title: 'City Not Found',
                message: 'Please check the spelling and try again. Make sure to enter a valid city name.'
            }
        }

        if (error.message?.includes('API key') || error.response?.status === 401) {
            return {
                icon: <KeyRound size={24} />,
                title: 'API Configuration Error',
                message: 'There seems to be an issue with the API configuration. Please contact support.'
            }
        }

        if (error.message?.includes('Network') || !navigator.onLine) {
            return {
                icon: <WifiOff size={24} />,
                title: 'Connection Error',
                message: 'Please check your internet connection and try again.'
            }
        }

        return {
            icon: <AlertCircle size={24} />,
            title: 'Something Went Wrong',
            message: error.message || 'An unexpected error occurred. Please try again later.'
        }
    }

    const { icon, title, message } = getErrorDetails()

    return (
        <ErrorCard>
            <ErrorIcon>{icon}</ErrorIcon>
            <ErrorContent>
                <ErrorTitle>{title}</ErrorTitle>
                <ErrorMessage>{message}</ErrorMessage>
            </ErrorContent>
        </ErrorCard>
    )
}

export default ErrorDisplay