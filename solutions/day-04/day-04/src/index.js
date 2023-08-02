import React from 'react'
import ReactDOM from 'react-dom'
import technologies from './images/frontend_technologies.png'

const buttonStyle = {
  backgroundColor: '#F37474',
  borderRadius: '5px',
  color: 'white',
  padding: '10px'
}
const backgroundStyle = {
  backgroundColor: '#C2E6F4',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'center'
}
const inputStyle = {
  borderRadius: '5px',
  padding: '10px'
}

const TechnologiesImage = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div style={{ display: 'grid', height: '100%' }}>
        <img src={technologies} alt='technologies' style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto', borderRadius: 5 }}></img>
      </div>
    </div>
  )
}
const HeaderText = () => {
  return (
    <h1>SUBSCRIBE</h1>
  )
}
const SignText = () => {
  return (
    <p>Sign up with your email address to receive news and updates</p>
  )
}
const InputFirstName = () => {
  return (
    <input placeholder='First name' style={inputStyle}></input>
  )
}
const InputLastName = () => {
  return (
    <input placeholder='Last name' style={inputStyle}></input>
  )
}
const InputEmail = () => {
  return (
    <input placeholder='Email' style={inputStyle}></input>
  )
}
const SubscribeButton = () => {
  return (
    <button style={buttonStyle}>Subscribe</button>
  )
}
const Sub = () => {
  return (
    <div style={backgroundStyle}>
      <HeaderText />
      <SignText />
      <div>
        <InputFirstName />
        <InputLastName />
        <InputEmail />
      </div>
      <SubscribeButton />
    </div>
  )
}

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const ColorText = () => {
  let color = hexaColor()
  return (
    <button style={{ padding: '10px 20px', background: `${color}`, border: 'none', borderRadius: 5 }}>{color}</button>
  )
}

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <TechnologiesImage />
    <Sub />
    <ColorText />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)