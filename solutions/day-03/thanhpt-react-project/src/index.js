import React from 'react'
import ReactDOM from 'react-dom'

const buttonStyle = {
  backgroundColor: '#F37474',
  borderRadius: '5px',
  color: 'white',
  padding: '10px'
}
const backgroundStyle = {
  backgroundColor: '#C2E6F4',
  borderRadius: '10px',
  padding: '10px'
}
const inputStyle = {
  borderRadius: '5px',
  padding: '10px'
}

const subscribe = (
  <div style={{ textAlign: 'center'}}>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div>
      <input placeholder='First name' style={inputStyle}></input>
      <input placeholder='Last name' style={inputStyle}></input>
      <input placeholder='Email' style={inputStyle}></input>
    </div>
    <button style={buttonStyle}>Subscribe</button>
  </div>
)
const app = (
  <div style={backgroundStyle}>
    {subscribe}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)