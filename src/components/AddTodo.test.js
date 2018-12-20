import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AddTodo } from './AddTodo';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    addTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<AddTodo {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('AddTodo', () => {
  it('should render subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('input').hasClass('')).toBe(true);

    expect(enzymeWrapper.find('button').text()).toBe('Add Todo');
  });

  it('AddTodo render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTodo />, div);
  });
});
