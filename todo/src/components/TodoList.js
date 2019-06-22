import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  {}
)(ToDoList);
