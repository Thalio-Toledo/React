import React, {useState} from 'react'


export default function Counter(){
    const [name, setName] = useState('Thalio');

    function changeName() {
        setName('toledo');
       
    }

    return (
        
    <div>
    <h1>Hello {name}</h1>
    <button onClick={changeName} >Change Name</button>
    </div>
    ) 
}