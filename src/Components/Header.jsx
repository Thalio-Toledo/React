import React from "react";
import ReactDom from "react-dom";

export default function(){
    const user = {
        firstName: 'Thalio',
        secondName:'Toledo'
    }
    const formatName = (user)=>{
        return user.firstName + '' + user.secondName;
    }
    
   
    return (
         <h1>Hello {formatName(user)}</h1>
    )
}