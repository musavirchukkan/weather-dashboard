import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../services/supabase'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showAuthModal, setShowAuthModal] = useState(false)

    useEffect(() => {
        // Check if user is logged in
        checkUser()

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null)
        })

        return () => subscription?.unsubscribe()
    }, [])

    const checkUser = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        } catch (error) {
            console.error('Error checking user:', error)
        } finally {
            setLoading(false)
        }
    }

    const signIn = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error
            setShowAuthModal(false)
            return { data, error: null }
        } catch (error) {
            return { data: null, error }
        }
    }

    const signUp = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            })
            if (error) throw error
            setShowAuthModal(false)
            return { data, error: null }
        } catch (error) {
            return { data: null, error }
        }
    }

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error
            setUser(null)
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    const value = {
        user,
        loading,
        signIn,
        signUp,
        signOut,
        showAuthModal,
        setShowAuthModal,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}