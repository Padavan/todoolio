import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Todos } from './Todos';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    todo: [{ name: 'name', status: false, id: 1 }],
    orderTodo: jest.fn(),
    fetchTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<Todos {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Todos', () => {
  it('should render subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h2').text()).toBe('Add');
    expect(enzymeWrapper.find('h3').text()).toBe('List');
  });

  it('Todos render without crashing', () => {
    const { enzymeWrapper } = setup();
    // expect(enzymeWrapper.find('div')).to.have.lengthOf(3);
  });
});
