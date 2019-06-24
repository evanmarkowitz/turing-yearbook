import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = props => {
  const showPerson = props.data.map(pers => {
      return <Person photo = {pers.photo} name = {pers.name} quote={pers.quote} superlative = {pers.superlative} />
    })
  return (
    <div className='cohort'>
      <h2>{props.title}</h2>
      <div className= "cohort--card--container">
        {showPerson}
      </div>
    </div>)
}

export default Cohort;
