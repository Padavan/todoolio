import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions';

class AddTodo extends React.Component {
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
    // reset widget
    this.setState({ valid: true, value: '' });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleButton()}> + </button>
        <input
          type='text'
          onChange={e => this.handleInput(e)}
          value={this.state.value}
          className={this.state.valid ? '' : 'invalid'}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo(name) {
    dispatch(addTodoAction(name));
  },
});

// export default connect(mapStateToProps, mapDispatchToProps)(Settings);


export default connect(null, mapDispatchToProps)(AddTodo);
