import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  state = {
    fetched: false
  }
  handleFetch = () => {
    this.setState({
      fetched: this.state.fetched ? false : true
    })
  }

  render() {
    const { fetched } = this.state
    const fetchedData = fetched ? <p>Done</p> : <p>Fetching</p>
    setTimeout(this.handleFetch, 2000)
    return (
      <div className='app'>
        {fetchedData}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)