import { TOGGLE_TODO } from './action-items';

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export default toggleTodo;
