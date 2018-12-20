const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_FETCH': {
      return action.todos;
    }
    case 'TODO_ADD':
      return [...state, {
        id: action.id,
        name: action.name,
        status: false
      }];
    case 'TODO_DELETE':
      return state.filter(item => item.id !== action.id);
    case 'TODO_EDIT':
      return state.map(item => (
        (item.id === action.id)
          ? { ...item, name: action.name, status: action.status }
          : item
      ));
    case 'TODO_REORDER':
      state.splice(action.to, 0, state.splice(action.from, 1)[0]);
      return state;
    default:
      return state;
  }
};

export default todo;
