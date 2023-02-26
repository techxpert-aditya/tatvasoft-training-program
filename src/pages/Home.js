import React, { Component } from 'react'
import Title from '../components/Title'

export default class home extends Component {
  render() {
    return (
      <div>
        <Title titleText="Hello there" description="welcome to this react training program"/>
        <Title titleText="keep going" description="this is an absolute fantastic course"/>
        <Title titleText="yayyyy!" description="you will learn many things while building this"/>
      </div>
    )
  }
}
