import React, {useState} from "react";

export default function Toggle() {
    const [val,setValor]= useState("ON");
    function toggle(){
        setValor((val ==="ON")?"OFF":"ON")
    }
    return <button onClick={toggle}>{val}</button>
    

}


 