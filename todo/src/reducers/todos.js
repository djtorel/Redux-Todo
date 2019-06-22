import { ADD_TODO } from '../actions';

const todos = (state = [], { type, text }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id:
            Math.floor(Math.random() * Date.now()).toString() +
            '-' +
            Date.now().toString(),
          text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
