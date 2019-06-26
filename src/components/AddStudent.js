import React, {Component} from 'react';
import './AddStudent.scss'

class AddStudent extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: 'https://placekitten.com/200/300'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitNewStudent = event => {
    event.preventDefault()
    const newStudent = {id: Date.now(), ...this.state}
    this.props.addStudent(newStudent)
    this.resetInputs()
  }

  resetInputs = event => {
    this.setState({name: '', quote: '', superlative: ''})
  }

  render() {
    return (
      <section className='form--container'>
        <form className="form">
          <input 
            type = 'text'
            placeholder = 'Name'
            value = {this.state.name}
            name = 'name'
            onChange = {this.handleChange}
          />
          <input 
            type = 'text'
            placeholder = 'quote'
            value = {this.state.quote}
            name = 'quote'
            onChange = {this.handleChange}
          />
          <input 
            type = 'text'
            placeholder = 'superlative'
            name = 'superlative'
            value = {this.state.superlative}
            onChange = {this.handleChange}
          />
        </form>
        <button onClick = {this.submitNewStudent}>Add Student</button>
      </section>
    )
  }
}

export default AddStudent;