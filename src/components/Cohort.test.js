import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort.js';

describe('Person', () => { 
  let testData = []
  beforeEach(() => {
    testData = [{id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},]
  })
  it('should match the snapshot with all data passed in correctly', () => { 
    const wrapper = mount( <Cohort
      data= {testData}
      />);
    expect(wrapper).toMatchSnapshot(); 
  }); 
  
}); 