import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = ({ todo }) => {
  console.log(todo);
  return (
    <div>
      <h1>Todos</h1>
      <h2> Add </h2>
      <AddTodo />
      <h2> List </h2>
      {todo.map(item => (
        <Todo key={item.id} data={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Todos);
