import { ADD_TODO } from './action-items';

const addTodo = value => ({
  type: ADD_TODO,
  value
});

export default addTodo;
