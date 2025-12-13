
import { useState } from "react";

export function SearchBar({cityValue, cityOnChange, handleSearch, isLoading}) {
    

    return (
        <>
        <p>Select the city</p>
        <input type="text"
        value={cityValue} 
        onChange={e => {cityOnChange(e.target.value)}}
        ></input>
        <button onClick={handleSearch} disabled={isLoading}>{isLoading ? 'Loading...' : 'Search'}</button>
        
        </>
    )

}
