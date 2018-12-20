import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Todo } from './Todo';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    data: { id: 1, name: 'name', status: false },
    editTodo: jest.fn(),
    removeTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<Todo {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Todo', () => {
  it('should render subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('button').text()).toBe('Remove');
  });
});
