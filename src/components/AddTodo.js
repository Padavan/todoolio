import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions';

export class AddTodo extends React.Component {
  state = {
    valid: true,
    value: ''
  }

  handleInput(e) {
    this.setState({ valid: true });
    this.setState({ value: e.target.value });
  }

  handleButton() {
    if (this.state.value.length === 0) {
      this.setState({ valid: false });
      return false;
    }
    this.props.addTodo(this.state.value);
    this.setState({ valid: true, value: '' });
    return 0;
  }

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={e => this.handleInput(e)}
          value={this.state.value}
          className={this.state.valid ? '' : 'invalid'}
        />
        <button onClick={() => this.handleButton()}>Add Todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo(name) {
    dispatch(addTodoAction(name));
  },
});

export default connect(null, mapDispatchToProps)(AddTodo);
