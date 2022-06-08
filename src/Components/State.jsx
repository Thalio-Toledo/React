import React, { Component } from "react";


export default class calc extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor:0,
        }
    }

    setValor = () =>{
        this.setState({valor: this.state.valor +1})
    }


    render(){
        console.log(this.state)
        return (
            <div>
            <h1>numero: {this.state.valor}</h1>     
            <button onClick={this.setValor}>+</button>
            
        </div>)
        
    }
    
}