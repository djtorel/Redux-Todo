import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  {}
)(ToDoList);
