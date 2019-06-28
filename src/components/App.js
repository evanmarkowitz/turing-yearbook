import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import AddStudent from './AddStudent'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      isHidden: true,

    }
  }
  addStudent = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  toggleIsHidden = () => {
    this.setState({isHidden: !this.state.isHidden})
  }


  render() {
    const Staff = () => (
      <div>
        <h2>Staff</h2>
        <Cohort data={this.state.staff} />
      </div>
    );
    
   const Students = () => (
      <div>
        <h2>Students</h2>
        <Cohort data={this.state.students} />
      </div>
    );
    
    return (
      <div className="App">
        <header className="App-header">
         <h1>Turing Yearbook</h1>
        </header>
        <button button onClick={this.toggleIsHidden}>Add Person</button>
        {!this.state.isHidden && <AddStudent addStudent={this.addStudent}/>}
        <Router>
          <Link to='' component={Staff}/>
          <Link to="/staff" className="togglePerson"><span>Staff</span></Link> | 
          <Link to="/students"><span>Students</span></Link>
          <Route path="/staff" component={Staff} />
          <Route path="/students" component={Students} />
      </Router>
      </div>
    );
  }
}

export default App;
