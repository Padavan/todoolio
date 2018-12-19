import React from 'react';
import { connect } from 'react-redux';

import { editTodoAction, removeTodoAction, toggleTodoAction } from '../actions';

// TODO uncontrolled input
const Todo = ({ data, editTodo, removeTodo, toggleTodo }) => {
  console.log(data);
  return (
    <div className='todo-card'>
      <input type='checkbox' checked={data.status} onChange={() => toggleTodo(data.id)} />
      {data.id}
      <input type='text' value={data.name} onChange={e => editTodo(data.id, e.target.value)} />
      <button onClick={() => removeTodo(data.id)}> Remove </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  editTodo(id, name) {
    dispatch(editTodoAction(id, name));
  },
  removeTodo(id) {
    dispatch(removeTodoAction(id));
  },
  toggleTodo(id) {
    dispatch(toggleTodoAction(id));
  }
});

export default connect(null, mapDispatchToProps)(Todo);
