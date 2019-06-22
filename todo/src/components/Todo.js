import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { toggleTodo, deleteTodo } from '../actions';

const todoContainerCSS = css`
  width: 100%;
  margin-top: 5px;
  display: flex;
  cursor: pointer;
`;

const todoCSS = css`
  width: 100%;
  padding: 5px;
  color: #dadada;
  background-color: #2a2a2a;
  border-radius: 3px 0 0 3px;
  text-align: center;
`;

const todoCompletedCSS = css`
  width: 100%;
  padding: 5px;
  color: #3a3a3a;
  background-color: #5a5a5a;
  border-radius: 3px 0 0 3px;
  text-align: center;
  text-decoration: line-through;
`;

const button = css`
  border: 0;
  background-color: #ba5a5a;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
`;

const Todo = ({ todo: { value, id, completed }, toggleTodo, deleteTodo }) => {
  return (
    <div css={todoContainerCSS}>
      <div
        css={!completed ? todoCSS : todoCompletedCSS}
        onClick={() => toggleTodo(id)}
      >
        {value}
      </div>
      <button css={button} onClick={() => deleteTodo(id)}>
        −
      </button>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todo);
