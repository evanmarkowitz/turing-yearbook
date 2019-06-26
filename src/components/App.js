import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import AddStudent from './AddStudent'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      isHidden: true,
      studentIsShown: true
    }
  }
  addStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  toggleIsHidden = () => {
    this.setState({isHidden: !this.state.isHidden})
  }

  toggleStudentStaff = () => {
    this.setState({studentIsShown: !this.state.studentIsShown})
  }

  render() {
    console.log(this.state.staff)
    return (
      <div className="App">
        <header className="App-header">
         <h1>Turing Yearbook</h1>
        </header>
        <button button onClick={this.toggleIsHidden}>Add Person</button>
        {!this.state.isHidden && <AddStudent addStudent={this.addStudent}/>}
        <button onClick={this.toggleStudentStaff}>Turn Page</button>
        {/* <button onClick={this.toggleStudentStaff}>Staff</button> */}
        {!this.state.studentIsShown && <Cohort title = 'Staff' data={this.state.staff}/>}
        {this.state.studentIsShown && <Cohort title = 'Students' data={this.state.students}/>}
      </div>
    );
  }
}

export default App;
