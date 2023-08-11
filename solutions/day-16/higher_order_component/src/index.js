import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Input = ({ type }) => {
  return (
    <input type={type} />
  )
}
const inputWithType = (CompParam, type = 'text') => {
  return (props) => {
    return <CompParam {...props} type={type} />
  }
}

const NewInput = inputWithType(Input)
const ButtonInput = inputWithType(Input, 'button')
const CheckboxInput = inputWithType(Input, 'checkbox')
const ColorInput = inputWithType(Input, 'color')
const DateInput = inputWithType(Input, 'date')
const DatetimeLocalInput = inputWithType(Input, 'datetime-local')
const EmailInput = inputWithType(Input, 'email')
const FileInput = inputWithType(Input, 'file')
const HiddenInput = inputWithType(Input, 'hidden')
const ImageInput = inputWithType(Input, 'image')
const MonthInput = inputWithType(Input, 'month')
const NumberInput = inputWithType(Input, 'number')
const PasswordInput = inputWithType(Input, 'password')
const RadioInput = inputWithType(Input, 'radio')
const RangeInput = inputWithType(Input, 'range')
const ResetInput = inputWithType(Input, 'reset')
const SearchInput = inputWithType(Input, 'search')
const SubmitInput = inputWithType(Input, 'submit')
const TelInput = inputWithType(Input, 'tel')
const TimeInput = inputWithType(Input, 'time')
const UrlInput = inputWithType(Input, 'url')
const WeekInput = inputWithType(Input, 'week')

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NewInput />
        <ButtonInput />
        <CheckboxInput />
        <ColorInput />
        <DateInput />
        <DatetimeLocalInput />
        <EmailInput />
        <FileInput />
        <HiddenInput />
        <ImageInput />
        <MonthInput />
        <NumberInput />
        <PasswordInput />
        <RadioInput />
        <RangeInput />
        <ResetInput />
        <SearchInput />
        <SubmitInput />
        <TelInput />
        <TimeInput />
        <UrlInput />
        <WeekInput />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)