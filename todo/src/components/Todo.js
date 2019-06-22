import React from 'react';

const Todo = ({ todo: { value } }) => {
  return <div>{value}</div>;
};

export default Todo;
