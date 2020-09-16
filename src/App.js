import React, { Component } from 'react'
// import Card from './components/Card'
import axios from 'axios'

class App extends Component {

  state = {
    name: '',
    employees: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchEmployee = event => {
    event.preventDefault()
    axios.get(`https://randomuser.me/api?results=20${this.state.name}`)
    .then(({ data }) => {
      this.setState({ employees: data, name: ''})
    })
    .catch(err => console.error(err))
  }


  render() {
    return (
      <>

      <h1>Find My Employee!</h1>
        
          

      </>
    )
  }
}

export default App