import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalTitle,
    CloseButton,
    AuthForm,
    FormGroup,
    Label,
    Input,
    SubmitButton,
    ToggleText,
    ErrorMessage,
    SuccessMessage
} from './AuthModal.styles'

const AuthModal = () => {
    const { showAuthModal, setShowAuthModal, signIn, signUp } = useAuth()
    const [isSignUp, setIsSignUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    if (!showAuthModal) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (isSignUp && password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        setLoading(true)

        try {
            if (isSignUp) {
                const { error } = await signUp(email, password)
                if (error) {
                    setError(error.message)
                } else {
                    setSuccess('Account created successfully! Check your email for verification.')
                    setTimeout(() => {
                        setShowAuthModal(false)
                    }, 2000)
                }
            } else {
                const { error } = await signIn(email, password)
                if (error) {
                    setError(error.message)
                } else {
                    setSuccess('Signed in successfully!')
                    setTimeout(() => {
                        setShowAuthModal(false)
                    }, 1000)
                }
            }
        } catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
        setSuccess('')
    }

    const toggleMode = () => {
        setIsSignUp(!isSignUp)
        resetForm()
    }

    return (
        <ModalOverlay onClick={() => setShowAuthModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{isSignUp ? 'Create Account' : 'Sign In'}</ModalTitle>
                    <CloseButton onClick={() => setShowAuthModal(false)}>
                        <X size={20} />
                    </CloseButton>
                </ModalHeader>

                <AuthForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </FormGroup>

                    {isSignUp && (
                        <FormGroup>
                            <Label>Confirm Password</Label>
                            <Input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                            />
                        </FormGroup>
                    )}

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {success && <SuccessMessage>{success}</SuccessMessage>}

                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
                    </SubmitButton>

                    <ToggleText>
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        <button type="button" onClick={toggleMode}>
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </ToggleText>
                </AuthForm>
            </ModalContent>
        </ModalOverlay>
    )
}

export default AuthModal