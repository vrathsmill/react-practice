import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './Button'
import Input from './Input'
import Welcome from './Welcome'
import FlavorForm from './FlavorForm'

class Card extends Component {
  render() {
    const style = {
      margin: 20,
      padding: 20,
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div>
        < Welcome name="Vicky" />
      <div style={style}>
        {this.props.children}
      </div>
        < Button />
        < Input />
        < FlavorForm />
      </div>
    )
  }
}

export default Card
