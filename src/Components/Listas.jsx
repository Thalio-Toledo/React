import React from  'react';


export default function MyList(props){
    const arr = props.valores;
    const listItems = arr.map((val,index)=>
        <li key={index}>{val}</li>
    );
    return <ul>{listItems}</ul>
}