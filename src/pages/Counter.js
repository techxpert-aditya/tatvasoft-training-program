import React, { Component } from "react";

export default class counter extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
    this.setState({
        number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.number}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
