# Weather Dashboard - React.js Application

A modern, feature-rich weather dashboard built with React.js, Vite, and @tanstack/react-query. This application provides real-time weather information with automatic updates, 5-day forecasts, and user authentication.

![Weather Dashboard](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.0-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

[View Live Demo](#) _(not test deployed)_

## ✨ Features

### Core Features

- 🔍 **City Search**: Search for any city worldwide to get current weather data
- 🌡️ **Real-time Weather**: Temperature, humidity, wind speed, and weather conditions
- 🎨 **Weather Icons**: Dynamic weather icons from OpenWeatherMap API
- 🔄 **Auto-refresh**: Automatic polling every 30 seconds for latest data
- ⚠️ **Error Handling**: Graceful handling of invalid cities, network failures, and API errors
- 💾 **Persistent Storage**: Last searched city saved and loaded on app revisit
- 🏗️ **Modular Architecture**: Clean component structure with separation of concerns
- 🎯 **State Management**: Context API for global state management
- 💅 **Styled Components**: CSS-in-JS for component-scoped styling

### Bonus Features

- 📅 **5-Day Forecast**: Detailed hourly forecast for the next 5 days
- 🌡️ **Unit Toggle**: Switch between Celsius and Fahrenheit
- ⚡ **React Query**: Advanced data fetching with caching and synchronization
- 🔐 **Authentication**: User accounts with Supabase integration
- ❤️ **Favorite Cities**: Save and manage favorite cities
- 📍 **Geolocation**: Get weather for current location
- 📊 **Search History**: Track your weather searches (with auth)
- 🎨 **Beautiful UI**: Modern design with smooth animations
- 📱 **Responsive**: Works perfectly on all devices

## 🛠️ Technology Stack

- **React 18.3.1** - UI library
- **Vite 5.2.0** - Build tool and dev server
- **@tanstack/react-query 5.45.0** - Data fetching and caching
- **Styled Components 6.1.11** - CSS-in-JS styling
- **Axios 1.7.2** - HTTP client
- **Lucide React** - Beautiful icons
- **Supabase** - Authentication and database
- **OpenWeatherMap API** - Weather data

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- OpenWeatherMap API key (provided)
- Supabase account (optional, for auth features)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/musavirchukkan/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your API keys:

   ```env
   VITE_OPENWEATHER_API_KEY=API_KEY
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5

   # Optional - for authentication
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthModal.jsx
│   │   │   └── AuthModal.styles.js
│   │   ├── ErrorDisplay/
│   │   │   ├── ErrorDisplay.jsx
│   │   │   └── ErrorDisplay.styles.js
│   │   ├── ForecastDisplay/
│   │   │   ├── ForecastDisplay.jsx
│   │   │   └── ForecastDisplay.styles.js
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.styles.js
│   │   ├── LoadingSpinner/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── LoadingSpinner.styles.js
│   │   ├── SearchInput/
│   │   │   ├── SearchInput.jsx
│   │   │   └── SearchInput.styles.js
│   │   └── WeatherDisplay/
│   │       ├── WeatherDisplay.jsx
│   │       └── WeatherDisplay.styles.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── WeatherContext.jsx
│   ├── hooks/
│   │   ├── useGeolocation.js
│   │   ├── useLocalStorage.js
│   │   └── useWeather.js
│   ├── services/
│   │   ├── supabase.js
│   │   └── weatherService.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── utils/
│   │   └── weatherHelpers.js
│   ├── App.jsx
│   ├── App.styles.js
│   └── main.jsx
├── public/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Implementation Approach

### 1. **Architecture Decisions**

- **Vite**: Chosen for lightning-fast HMR and optimized builds
- **React Query**: Provides robust data synchronization with automatic refetching
- **Styled Components**: Enables dynamic styling and component encapsulation
- **Context API**: Sufficient for app-wide state without Redux complexity

### 2. **Performance Optimizations**

- Code splitting configured in Vite for optimal bundle sizes
- React Query caching prevents unnecessary API calls
- Debounced search input for better UX
- Lazy loading for forecast component
- Automatic cleanup of intervals and subscriptions

### 3. **User Experience**

- Intuitive search with autocomplete suggestions
- One-click geolocation for current location weather
- Persistent storage of preferences and last search
- Beautiful loading states and error messages
- Smooth animations and transitions

### 4. **Error Handling Strategy**

- Comprehensive error boundaries
- User-friendly error messages
- Network failure detection
- Graceful degradation
- Retry mechanisms with exponential backoff

## 🔍 Features in Detail

### Weather Data

- Current temperature with "feels like"
- Humidity percentage
- Wind speed and direction
- Visibility distance
- Atmospheric pressure
- Min/Max temperatures
- Sunrise and sunset times

### 5-Day Forecast

- Hourly breakdown for each day
- Temperature ranges
- Weather conditions
- Precipitation probability
- Wind forecasts

### User Features

- Save favorite cities
- Toggle temperature units
- Search history (with auth)
- Geolocation support
- Auto-refresh toggle

## 📝 API Documentation

### OpenWeatherMap Endpoints Used

1. **Current Weather**

   ```
   GET /weather?q={city}&appid={API_KEY}&units={units}
   ```

2. **5-Day Forecast**

   ```
   GET /forecast?q={city}&appid={API_KEY}&units={units}
   ```

3. **Weather by Coordinates**
   ```
   GET /weather?lat={lat}&lon={lon}&appid={API_KEY}&units={units}
   ```

## 🐛 Known Issues

- Supabase auth requires email verification (can be disabled in dashboard)
- Some city names with special characters may need encoding

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**

- Email: your.email@example.com
- GitHub: [https://github.com/yourusername](https://github.com/musavirchukkan)
- LinkedIn: [https://linkedin.com/in/yourname](https://www.linkedin.com/in/musavirchukkan/)

## 🙏 Acknowledgments

- OpenWeatherMap for the excellent weather API
- Qodex.ai for the opportunity
- React team for the amazing framework
- Vite team for the blazing fast build tool

---

Made with ❤️ and ☕ by [Musavir Chukkan](https://musavirchukkan.in)
