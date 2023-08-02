import React from 'react';
import ReactDOM from 'react-dom';

const numArray = Array.from(Array(32).keys())
const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
const isOdd = num => {
  if( num % 2 === 0) return false;
  return true
}

const Number = ({ number }) => {
  let color = 'red'
  if (isOdd(number)) {
    color = 'yellow'
  } else {
    color = "green"
  }
  if (isPrime(number)) {
    color = 'red'
  }
  
  return (
    <button style={{ backgroundColor: `${color}`, color: 'white', padding: '10px' }}>{number}</button>
  )
}

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number) => (
    <Number number={number} />
  ))
  return <div>{numberList}</div>
}

const App = () => (
  <div className='app'>
    <Numbers numbers={numArray} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)