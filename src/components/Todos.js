import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';
import Todo from './Todo';

import { orderTodoAction, fetchTodoAction } from '../actions';

const placeholder = document.createElement('div');
placeholder.className = 'placeholder';

export class Todos extends React.Component {
  componentDidMount() {
    this.props.fetchTodo();
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }

  dragEnd() {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);
    // console.log('node', this.dragged.parentNode);
    const from = Number(this.dragged.dataset.id);
    const to = Number(this.over.dataset.id);
    this.props.orderTodo(from, to);
    this.forceUpdate();
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = 'none';
    if (e.target.className === 'placeholder') return;
    this.over = e.target;
    // e.target.parentNode.insertBefore(placeholder, e.target);
    // e.target.insertAdjacentHTML('afterend', `<div class='placeholder' />`);
    e.target.after(placeholder);
  }

  render() {
    return (
      <div>
        <h2>Add</h2>
        <AddTodo />
        <h3>List</h3>
        <div className='drag-container' onDragOver={e => this.dragOver(e)}>
          {this.props.todo.map((item, id) => (
            <div
              key={item.id}
              data-id={id}
              className='todo-card'
              draggable='true'
              onDragEnd={e => this.dragEnd(e)}
              onDragStart={e => this.dragStart(e)}
            >
              <Todo data={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  orderTodo(to, from) {
    dispatch(orderTodoAction(to, from));
  },
  fetchTodo() {
    dispatch(fetchTodoAction());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
