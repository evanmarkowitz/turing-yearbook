import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
const Person = props => (
  <section className = 'person--card'>
    <img src = {props.photo} alt='portrait'></img>
    <h3 className='person__name'>{props.name}</h3>
    <p className='person__quote'>{props.quote}</p>
    <p className='person__superlative'>{props.superlative}</p>
  </section>
)
export default Person;
