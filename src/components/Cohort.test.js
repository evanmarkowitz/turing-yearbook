import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort.js';

describe('Person', () => { 
  it('should match the snapshot with all data passed in correctly', () => { 
    const wrapper = mount( <Cohort
      
      />);
    expect(wrapper).toMatchSnapshot(); 
  }); 
}); 