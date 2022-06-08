import React from 'react';

export default function Nota(props){

    function handleChange(e){
        props.mudarNota(e.target.value)
    }
    return (
        <div>
            <legend>Informe a nota{props.num}</legend>
            <input type="text" value={props.nota} onChange={handleChange}></input>
        </div>
    )
}