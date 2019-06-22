import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todoCardContainer = css`
  margin-top: 10px;
  width: 50%;
  background-color: #4a4a4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 5px;
`;

const TodoCard = () => {
  return (
    <div css={todoCardContainer}>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoCard;
