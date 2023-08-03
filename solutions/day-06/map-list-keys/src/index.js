import React from "react";
import ReactDOM from "react-dom";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
const generateArray = (length, generatorFunction) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(generatorFunction());
  }
  return array;
};

const numArray = Array.from(Array(32).keys());
const colorArray = generateArray(32, hexaColor);
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const isOdd = (num) => {
  if (num % 2 === 0) return false;
  return true;
};

const GridItem = ({ value, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: `${backgroundColor}`,
        color: "white",
        padding: "20px",
        textAlign: "center",
        border: "1px solid white",
        fontSize: "20px",
      }}
    >
      {value}
    </div>
  );
};

const gridItemColor = (value) => {
  let color = "red";
  if (isOdd(value)) {
    color = "yellow";
  } else {
    color = "green";
  }
  if (isPrime(value)) {
    color = "red";
  }
  return color
}

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(8, auto)",
};

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number) => <GridItem value={number} backgroundColor={gridItemColor(number)} />);
  return <div style={gridContainer}>{numberList}</div>;
};

const Colors = ({ colors }) => {
  const colorList = colors.map((color) => <GridItem value={color} backgroundColor={color} />)
  return <div style={gridContainer}>{colorList}</div>;
}

const App = () => (
  <div className="app">
    <h1 style={{ textAlign: "center" }}>Number Generator</h1>
    <Numbers numbers={numArray} />
    <h1 style={{ textAlign: "center" }}>Hexadecimal Colors</h1>
    <Colors colors={colorArray} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
