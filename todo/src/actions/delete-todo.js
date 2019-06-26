import { DELETE_TODO } from './action-items';

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export default deleteTodo;
