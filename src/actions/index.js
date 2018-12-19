let currentId = 0;

export const addTodoAction = name => ({
  type: 'TODO_ADD',
  id: currentId++,
  name
});


export const editTodoAction = (id, name) => ({
  type: 'TODO_EDIT',
  id,
  name
});

export const removeTodoAction = id => ({
  type: 'TODO_DELETE',
  id
});

export const toggleTodoAction = id => ({
  type: 'TODO_TOGGLE',
  id
});
