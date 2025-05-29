import React from 'react'
import { SpinnerContainer, Spinner, LoadingText } from './LoadingSpinner.styles'

const LoadingSpinner = ({ text = 'Loading weather data...' }) => {
    return (
        <SpinnerContainer>
            <Spinner />
            <LoadingText>{text}</LoadingText>
        </SpinnerContainer>
    )
}

export default LoadingSpinner