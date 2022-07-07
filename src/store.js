import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// export const addTodo = createAction("ADD"); // 전에 만들었던 action 부분
// export const deleteTodo = createAction("DELETE");

// pure/redux
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: action.id }, ...state];
//     case deleteTodo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// toolkit
// const reducer = createReducer([], {
//   // reducer 부분 switch가 생략
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); //mutate 가능 / push는 아무것도 return 하지 않는다
//   },
//   [deleteTodo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), //새로운 state objsct를 리턴해야 한다
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

console.log(toDos.reducer);

const store = configureStore({ reducer: toDos.reducer }); //default to the store

export const { add, remove } = toDos.actions;

export default store;
