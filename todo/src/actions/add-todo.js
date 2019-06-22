import { ADD_TODO } from './action-items';

const addTodo = text => ({
  type: ADD_TODO,
  text
});

export default addTodo;
