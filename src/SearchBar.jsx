
import { useState } from "react";

export function SearchBar({cityValue, cityOnChange, handleSearch, isLoading, inputRef}) {
    

    return (
        <>
        <p>Select the city</p>
        <input type="text"
        value={cityValue} 
        onChange={e => {cityOnChange(e.target.value)}} ref={inputRef}
        ></input>
        <button onClick={() => handleSearch(cityValue)} disabled={isLoading}>{isLoading ? 'Loading...' : 'Search'}</button>
        
        </>
    )

}
