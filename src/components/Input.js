import React, { Component } from 'react'
import { render } from 'react-dom'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  
    handleChange = (e) => {
      this.setState({value: e.target.value})
    }


  render() {
    const {value} = this.state

    return (
      <div>
        <label htmlFor={'id'}>
          Enter value
        </label>
        <input
          id={'id'}
          type="text"
          value={value}
          placeholder="Sup dude"
          onChange={this.handleChange}
        />
        <br />
        <br />
        My value: {value}
      </div>
    )
  }
}

export default Input
