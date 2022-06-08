
import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue", year:1999});
  }
  changeModel = () =>{
    this.setState({model:"Focus"})
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {console.log(this.state.color)}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
        <button
          type="button"
          onClick={this.changeModel}
        >Change model</button>
      </div>
    );
  }
}

export default Car;