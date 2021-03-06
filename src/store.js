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

const toDos = createSlice({ //createaction을 통해 따로 액션타입을 정의하지 않아도 자동으로 액션타입을 만들어 준다
  name: "toDosReducer",
  initialState: [], //초기화
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
//reducer 함수와 action creator를 포함한 객체이다
//즉 이를 사용하면 초기 값과 action creator와 reducer가 한번에 생성된다

const store = configureStore({ reducer: toDos.reducer }); //default to the store
//reducer에서 반환된 새로운 state를 store라는 객체로 저장해 관리하는 곳

export const { add, remove } = toDos.actions;

export default store;
