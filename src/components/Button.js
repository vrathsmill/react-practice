import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {

  state = {count: 0}

  handleClick = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <button type='button' onClick={this.handleClick}>
        Click HERE to increment: {count}
      </button>
    )
  }
}
export default Button
