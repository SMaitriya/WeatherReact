
import { useState } from "react";

export function SearchBar({cityValue, cityOnChange, handleSearch, isLoading, inputRef}) {
  return (
    <div className="search-container">
      <p>Select the city</p>
      <input 
        type="text"
        value={cityValue} 
        onChange={e => cityOnChange(e.target.value)}
        onKeyUp={e => e.key === "Enter" && handleSearch(cityValue)}
        ref={inputRef}
        placeholder="Enter city name..."
      />
      <button onClick={() => handleSearch(cityValue)} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </div>
  )
}

