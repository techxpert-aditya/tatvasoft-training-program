import React, { Component } from 'react'
import Title from '../components/Title'

export default class home extends Component {

  constructor() {
    super();

    this.state = {
        titleText: "hello there",
        description: "welcome to this react training program"
    }
  }

  render() {
    return (
      <div>
        <Title titleText={this.state.titleText} description={this.state.description}/>
      </div>
    )
  }
}
