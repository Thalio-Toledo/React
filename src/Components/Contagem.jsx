import React from "react";

class Contagem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numero: 0
        }

    }

    somarNumero = ()=>{
        
        this.setState({numero:this.state.numero +10})
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <h1>number:{this.state.numero}</h1>
            <button onClick={this.somarNumero}>+</button>
            </div>
        )
    }

}

export default Contagem;