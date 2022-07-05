import { legacy_createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return { type: ADD, text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo,
};

export default store;
