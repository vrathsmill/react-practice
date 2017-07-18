import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card color={'skyblue'}>Card 1</Card>
      </div>
    );
  }
}

export default App;
