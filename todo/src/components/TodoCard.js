import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoCard = ({ addTodo }) => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoCard;
