import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

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

    case DELETE_TODO:
      return state.filter(todo => todo.id !== id);

    default:
      return state;
  }
};

export default todos;
