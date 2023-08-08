// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

class App extends Component {
  state = {
    x: 0,
    y: 0,
  }
  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({ x: getRndInteger(0, 1000), y: getRndInteger(0, 800) })
  }
  render() {
    return (
      <div>
        <button onMouseMove={this.handleMouseMove} style={{ position: 'relative', top: `${this.state.y}px`, left: `${this.state.x}px` }}>30 Days Of React</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)