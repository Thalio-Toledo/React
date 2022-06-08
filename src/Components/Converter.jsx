import React, { useState } from 'react'


export default function Converter(){
    const [km, setKm]=useState(0);

    function handleChange(e){
        setKm(e.target.value);
    }

    function convert(km){
        return (km/1.609).toFixed(2);
    }
    return  <div>
        <input type="text" value={km} onChange={handleChange} />
        <p>{km} km is {convert(km)} miles</p>
    </div>;
    
}
