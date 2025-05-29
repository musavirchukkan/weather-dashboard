import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Weather data storage functions
export const weatherStorage = {
    // Save user's weather preferences
    savePreferences: async (userId, preferences) => {
        const { data, error } = await supabase
            .from('user_preferences')
            .upsert({
                user_id: userId,
                ...preferences,
                updated_at: new Date().toISOString()
            })

        if (error) throw error
        return data
    },

    // Get user's preferences
    getPreferences: async (userId) => {
        const { data, error } = await supabase
            .from('user_preferences')
            .select('*')
            .eq('user_id', userId)
            .single()

        if (error && error.code !== 'PGRST116') throw error
        return data
    },

    // Save weather search history
    saveSearchHistory: async (userId, city, weatherData) => {
        const { data, error } = await supabase
            .from('search_history')
            .insert({
                user_id: userId,
                city_name: city,
                weather_data: weatherData,
                searched_at: new Date().toISOString()
            })

        if (error) throw error
        return data
    },

    // Get search history
    getSearchHistory: async (userId, limit = 10) => {
        const { data, error } = await supabase
            .from('search_history')
            .select('*')
            .eq('user_id', userId)
            .order('searched_at', { ascending: false })
            .limit(limit)

        if (error) throw error
        return data
    },

    // Save favorite cities
    saveFavoriteCity: async (userId, cityData) => {
        const { data, error } = await supabase
            .from('favorite_cities')
            .insert({
                user_id: userId,
                city_id: cityData.id,
                city_name: cityData.name,
                country: cityData.sys.country,
                coordinates: cityData.coord,
                added_at: new Date().toISOString()
            })

        if (error) throw error
        return data
    },

    // Get favorite cities
    getFavoriteCities: async (userId) => {
        const { data, error } = await supabase
            .from('favorite_cities')
            .select('*')
            .eq('user_id', userId)
            .order('added_at', { ascending: false })

        if (error) throw error
        return data
    },

    // Remove favorite city
    removeFavoriteCity: async (userId, cityId) => {
        const { error } = await supabase
            .from('favorite_cities')
            .delete()
            .eq('user_id', userId)
            .eq('city_id', cityId)

        if (error) throw error
    }
}