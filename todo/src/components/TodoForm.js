import React, { useState } from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { addTodo } from '../actions';

const formContainer = css`
  width: 100%;
`;

const formCSS = css`
  width: 100%;
  background-color: black;
  display: flex;
  alignt-items: stretch;
`;

const inputCSS = css`
  width: 100%;
  background-color: #3a3a3a;
  border: 0;
  padding: 5px;
`;

const buttonCSS = css`
  border: 0;
  background-color: #2a2a2a;
  color: #dadada;
`;

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
    <div css={formContainer}>
      <form css={formCSS} onSubmit={submitHandler}>
        <input
          css={inputCSS}
          type="text"
          placeholder="Add todo..."
          value={inputText}
          onChange={inputHandler}
        />
        <button css={buttonCSS} onClick={submitHandler}>
          +
        </button>
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
