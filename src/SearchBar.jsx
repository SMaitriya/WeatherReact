
import { useState } from "react";

export function SearchBar({cityValue, cityOnChange}) {
    

    return (
        <>
        <p>Select the city</p>
        <input type="text"
        value={cityValue}
        onChange={e => cityOnChange(e.target.value)}
        ></input>
        </>
    )

}