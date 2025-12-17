import { useState, useEffect, useRef } from 'react'
import './App.css'
import { SearchBar } from './SearchBar.jsx';
import { Result } from './Result.jsx';

function App() {
  
  const [cityInput, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const inputRef = useRef(null);


  useEffect(() => {
    const defaultCity = "Paris";
    setCity(defaultCity);
    handleSearch(defaultCity);

    if(inputRef.current) {
      inputRef.current.focus();
    }

  }, []);



  const handleSearch = async (cityToSearch) => {

    const searchCity = cityToSearch || cityInput;
    if(!searchCity) {
      return
    }
    setWeatherData(null);
    setErrorMessage(null);
    const URL_FINALE = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
    try {
      setIsLoading(true);
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
      setErrorMessage("Couldnt find city name");
      console.error("Erreur de récupération des données :", error.message);
    }
    finally {
      setIsLoading(false);
    }

  }


  return (
    <>
     <SearchBar
     cityValue={cityInput}
     cityOnChange={setCity}
     handleSearch={handleSearch}
     isLoading={isLoading}
     inputRef={inputRef}/>
     {isLoading ? (
      <p className="loading">Loading...</p>
      ) : errorMessage ? (
        <p className="error">{errorMessage}</p>
      ) : weatherData ? (
        <Result data={weatherData}/>
      ) : (
        <p className="empty">Search weather with city name</p>
      )}
          </>
        )
      }

export default App
