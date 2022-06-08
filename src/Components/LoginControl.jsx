import React, {useState} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLoginClick(){
        setIsLoggedIn(true)
    }
    
   
    function handleLogoutClick(){
        setIsLoggedIn(false)
    }
    
    let button
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
        
    }else{
        button = <LoginButton onclick={handleLoginClick}/>
        
    }
    
    return (   
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
        
    )
    
    
}