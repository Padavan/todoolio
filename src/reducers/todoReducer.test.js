import reducer from './todoReducer';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle TODO_FETCH', () => {
    expect(
      reducer([], {
        type: 'TODO_FETCH',
        todos: [{
          name: 'Run the tests',
          status: false,
          id: 0
        }]
      })
    ).toEqual([
      {
        name: 'Run the tests',
        status: false,
        id: 0
      }
    ]);
  });

  it('should handle TODO_ADD', () => {
    expect(
      reducer([], {
        type: 'TODO_ADD',
        name: 'Run the tests',
        id: 1
      })
    ).toEqual([
      {
        name: 'Run the tests',
        status: false,
        id: 1
      }
    ]);
  });

  it('should handle TODO_DELETE', () => {
    expect(
      reducer([{ id: 1 }], {
        type: 'TODO_DELETE',
        id: 1
      })
    ).toEqual([]);
  });

  it('should handle TODO_EDIT', () => {
    expect(
      reducer([{
        name: 'Run some tests',
        id: 1,
        status: true
      }], {
        type: 'TODO_EDIT',
        name: 'Run the tests',
        id: 1,
        status: false
      })
    ).toEqual([
      {
        name: 'Run the tests',
        id: 1,
        status: false
      }
    ]);
  });

  it('should handle TODO_REORDER', () => {
    expect(
      reducer([1, 2, 3, 4, 5], {
        type: 'TODO_REORDER',
        from: 0,
        to: 3,
      })
    ).toEqual([2, 3, 4, 1, 5]);
  });
});
