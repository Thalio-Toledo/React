import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        console.log('Componente foi criado')
        this.timerID = setInterval(()=> this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;