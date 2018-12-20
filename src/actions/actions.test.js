import * as actions from '.';

describe('actions', () => {
  it('should create and action to place fetched todos in store', () => {
    const todos = {
      id: 1, name: 'Test', status: false
    };
    const expectedActions = {
      type: 'TODO_FETCH',
      todos
    };
    expect(actions.fetchEnd(todos)).toEqual(expectedActions);
  });

  it('should do a post request and make an action', () => {
    const name = 'Todo';
    const expectedActions = {
      id: 1,
      name: 'Todo',
      type: 'TODO_ADD'
    };
    expect(actions.addTodoAction(name)).toEqual(expectedActions);
  });

  it('should do delete task action and make delete request', () => {
    const id = 1;
    const expectedActions = {
      id: 1,
      type: 'TODO_DELETE'
    };
    expect(actions.removeTodoAction(id)).toEqual(expectedActions);
  });


  it('should do delete task action and make delete request', () => {
    const id = 1;
    const status = true;
    const name = 'Typo';
    const expectedActions = {
      id: 1,
      name: 'Typo',
      status: true,
      type: 'TODO_EDIT'
    };
    expect(actions.editTodoAction(id, name, status)).toEqual(expectedActions);
  });

  it('should do reorder action', () => {
    const from = 2;
    const to = 1;
    const expectedActions = {
      to: 1,
      from: 2,
      type: 'TODO_REORDER'
    };
    expect(actions.orderTodoAction(from, to)).toEqual(expectedActions);
  });
});
