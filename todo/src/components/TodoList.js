import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const ToDoList = ({ todos }) => {
  return todos.map(todo => <Todo key={todo.id} todo={todo} />);
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  {}
)(ToDoList);
