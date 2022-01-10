import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";

const init = { Todo: [] };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        Todo: [...state.Todo, payload]
      };
    case DELETE_TODO:
      let { Todo } = state;
      return {
        ...state,
        Todo: Todo.filter((item) => item.id !== payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        Todo: state.Todo.map((item) => {
          if (item.id === payload) {
            item.status = !item.status;
          }
          return item;
        })
      };
    case EDIT_TODO:
      return {
        ...state,
        Todo: state.Todo.map((item) => {
          if (item.id === payload.id) {
            return { ...item, title: payload.title };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
