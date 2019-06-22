import { useState } from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { addTodo } from '../actions';

const formContainer = css`
  width: 100%;
`;

const formCSS = css`
  width: 100%;
  display: flex;
  alignt-items: stretch;
`;

const inputCSS = css`
  width: 100%;
  background-color: #3a3a3a;
  border: 0;
  padding: 5px;
  border-radius: 3px 0 0 3px;
`;

const buttonCSS = css`
  border: 0;
  background-color: #2a2a2a;
  color: #dadada;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
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
