import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import AddStudent from './AddStudent'


class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }
  addStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  render() {
    console.log(this.state.staff)
    return (
      <div className="App">
        <header className="App-header">
         <h1>Turing Yearbook</h1>
        </header>
        <AddStudent addStudent={this.addStudent}/>
        <Cohort title = 'Staff' data={this.state.staff}/>
        <Cohort title = 'Students' data={this.state.students}/>
      </div>
    );
  }
}

export default App;
