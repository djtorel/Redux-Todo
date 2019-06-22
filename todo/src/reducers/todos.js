import { ADD_TODO } from '../actions';

const todos = (state = [], { type, value }) => {
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
    default:
      return state;
  }
};

export default todos;
