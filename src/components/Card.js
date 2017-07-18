import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from './Button'
import Input from './Input'

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
      <div style={style}>
        {this.props.children}
      </div>
        < Button />
        < Input />
      </div>
    )
  }
}

export default Card
