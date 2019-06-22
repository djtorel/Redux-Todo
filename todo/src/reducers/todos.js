import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todos = (state = [], { type, value, id }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id:
            Math.floor(Math.random() * Date.now()).toString() +
            '-' +
            Date.now().toString(),
          value,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
