import React from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { toggleTodo } from '../actions';

const todoContainerCSS = css`
  width: 100%;
  margin-top: 5px;
`;

const todoCSS = css`
  padding: 5px;
  color: #dadada;
  background-color: #1a1a1a;
  border-radius: 3px;
  text-align: center;
`;

const todoCompletedCSS = css`
  padding: 5px;
  color: #3a3a3a;
  background-color: #5a5a5a;
  border-radius: 3px;
  text-align: center;
  text-decoration: line-through;
`;

const Todo = ({ todo: { value, id, completed }, toggleTodo }) => {
  return (
    <div css={todoContainerCSS}>
      <div
        css={!completed ? todoCSS : todoCompletedCSS}
        onClick={() => toggleTodo(id)}
      >
        {value}
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
