import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Person from './Person.js';

describe('Person', () => { 
  it('should match the snapshot with all data passed in correctly', () => { 
    const wrapper = shallow( <Person 
      photo = 'photo-src'
      name = 'Evan'
      quote = 'it me!'
      superlative = 'the best of the best'
    />);
    expect(wrapper).toMatchSnapshot(); 
  }); 
}); 