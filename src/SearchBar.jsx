
import { useState } from "react";

export function SearchBar({cityValue, cityOnChange, handleSearch}) {
    

    return (
        <>
        <p>Select the city</p>
        <input type="text"
        value={cityValue}
        onChange={e => {cityOnChange(e.target.value)}}
        ></input>
        <button onClick={handleSearch}> Search</button>
        </>
    )

}
