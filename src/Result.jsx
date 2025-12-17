
export function Result({data}) {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  return (
    <div className="weather-result">
      <div className="city-name">{data.name}</div>
      <img src={iconUrl} alt={data.weather[0].description}/>
      <div className="temperature">{Math.round(data.main.temp)}</div>
      <div className="description">{data.weather[0].description}</div>
      
      <div className="weather-details">
        <div className="detail-item">
          <div className="label">Humidity</div>
          <div className="value">{data.main.humidity}%</div>
        </div>
        <div className="detail-item">
          <div className="label">Max</div>
          <div className="value">{Math.round(data.main.temp_max)}°</div>
        </div>
        <div className="detail-item">
          <div className="label">Min</div>
          <div className="value">{Math.round(data.main.temp_min)}°</div>
        </div>
      </div>
    </div>
  )
}