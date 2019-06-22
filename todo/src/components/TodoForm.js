import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const inputHandler = ({ target: { value } }) => {
    setInputText(value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (inputText.length > 0) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add todo..."
          value={inputText}
          onChange={inputHandler}
        />
        <button onClick={submitHandler}>+</button>
      </form>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
