import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './SearchBar.jsx';
import { Result } from './Result.jsx';

function App() {
  
  const [cityInput, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null)

  const handleSearch = async () => {
    if(!cityInput) {
      return
    }
    const URL_FINALE = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(URL_FINALE);
      if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} - Ville non trouvée.`);
        }

      const data = await response.json();
      setWeatherData(data); 
      console.log("Données météo stockées :", data);
    }
    catch (error) {
      setWeatherData(null);
      console.error("Erreur de récupération des données :", error.message);
    }

  }


  return (
    <>
     <p></p>
     <SearchBar
     cityValue={cityInput}
     cityOnChange={setCity}
     handleSearch={handleSearch}/>
     {weatherData ? (
      <Result data={weatherData}/>
     ) : (
      <p>Search weather with city name</p>
     )
     }
    </>
  )
}

export default App
