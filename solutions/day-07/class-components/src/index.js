import React from "react";
import ReactDOM from "react-dom";

class GridItem extends React.Component {
  render() {
    return (
      <div style={{
        backgroundColor: `${this.props.backgroundColor}`,
        color: "white",
        padding: "20px",
        textAlign: "center",
        border: "1px solid white",
        fontSize: "20px",
      }}>{this.props.value}</div>
    )
  }
}

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(8, auto)",
}
class Numbers extends React.Component {
  isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  isOdd = (num) => {
    if (num % 2 === 0) return false;
    return true;
  }
  gridItemColor = (value) => {
    let color = "red";
    if (this.isOdd(value)) {
      color = "yellow";
    } else {
      color = "green";
    }
    if (this.isPrime(value)) {
      color = "red";
    }
    return color
  }
  render() {
    const numberList = this.props.numbers.map((number) => <GridItem value={number} backgroundColor={this.gridItemColor(number)} />);
    return (<div style={gridContainer}>{numberList}</div>)
  }
}


class Colors extends React.Component {
  render() {
    const colorList = this.props.colors.map((color) => <GridItem value={color} backgroundColor={color} />)
    return (
      <div style={gridContainer}>{colorList}</div>
    )
  }
}

class App extends React.Component {
  hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  }
  generateArray = (length, generatorFunction) => {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(generatorFunction());
    }
    return array;
  }
  render() {
    const numArray = Array.from(Array(32).keys())
    const colorArray = this.generateArray(32, this.hexaColor)
    return (
      <div className="app">
        <h1 style={{ textAlign: "center" }}>Number Generator</h1>
        <Numbers numbers={numArray} />
        <h1 style={{ textAlign: "center" }}>Hexadecimal Colors</h1>
        <Colors colors={colorArray} />
        <h1 style={{ textAlign: "center" }}>World population</h1>
        <canvas id="myChart" style={{ width: '100%', maxWidth: '700px' }}></canvas>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
