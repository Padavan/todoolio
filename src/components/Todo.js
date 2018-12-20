import React from 'react';
import { connect } from 'react-redux';

import { editTodoAction, removeTodoAction } from '../actions';

// TODO uncontrolled input
const Todo = ({ data, editTodo, removeTodo }) => {
  console.log(data);
  return (
    <React.Fragment>
      <input type='checkbox' checked={data.status} onChange={() => editTodo(data.id, data.name, !data.status)} />
      <input type='text' value={data.name} onChange={e => editTodo(data.id, e.target.value, data.status)} />
      <button onClick={() => removeTodo(data.id)}> Remove </button>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  editTodo(id, name, status) {
    dispatch(editTodoAction(id, name, status));
  },
  removeTodo(id) {
    dispatch(removeTodoAction(id));
  }
});

export default connect(null, mapDispatchToProps)(Todo);
