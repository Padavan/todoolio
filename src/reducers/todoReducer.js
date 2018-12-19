const todo = (state = [], action) => {
  switch (action.type) {
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
          ? { ...item, name: action.name }
          : item
      ));
    case 'TODO_TOGGLE':
      return state.map(item => (
        (item.id === action.id)
          ? { ...item, status: !item.status }
          : item
      ));
    default:
      return state;
  }
};

export default todo;
