import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Cohort', () => { 

  it('should match the snapshot with all data passed in correctly', () => { 
    const wrapper = mount( <App
      />);
    expect(wrapper).toMatchSnapshot(); 
  }); 
  
}); 