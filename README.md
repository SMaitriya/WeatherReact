# 🌤️ Weather App

A modern weather application with real-time data integration using the OpenWeatherMap API.

![Weather App Screenshot](public/image.png)

## 🎯 Features

- Real-time weather data via OpenWeatherMap API
- City-based weather search with instant results
- Displays temperature, humidity, and temperature range
- Dynamic weather icons based on conditions
- Responsive error handling for invalid inputs
- Keyboard shortcuts (Enter to search)
- Modern dark UI design

## 🛠️ Built With

- **React** - Component-based architecture
- **Vite** - Fast build tooling
- **OpenWeatherMap API** - RESTful weather data service
- **JavaScript ES6+** - Async/await, fetch API
- **CSS3** - Modern styling with backdrop filters

## 🚀 Key Implementation

- Integrated RESTful API with proper error handling
- Managed application state with React hooks
- Implemented async data fetching with loading states
- Built reusable component architecture
- Handled API keys securely with environment variables

## 📦 Installation
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
npm install
```

Add your API key in `.env`:
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Run the app:
```bash
npm run dev
```