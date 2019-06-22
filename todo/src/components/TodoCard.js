import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import { addTodo } from '../actions';

const TodoCard = ({ addTodo }) => {
  return (
    <div>
      <TodoList />
      <button onClick={() => addTodo('test')}>Test</button>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoCard);
