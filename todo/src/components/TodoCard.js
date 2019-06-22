import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const TodoCard = ({ addTodo }) => {
  return (
    <div>
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
