import React, { Component } from 'react'
import { render } from 'react-dom'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleName = this.handleName.bind(this)
  }

  handleName(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
    <div>
      <input
        id='id'
        type="text"
        placeholder="Your Name"
        value={this.state.value}
        onChange={this.handleName}
      />

    <h1>Hello, {this.state.value} </h1>

    </div>

  )}
}

export default Welcome
