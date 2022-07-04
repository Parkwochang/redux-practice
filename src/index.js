import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text: text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (toDo) => {
  store.dispatch(deleteToDo(toDo));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; // 데이터 쌓임 방지용 초기화
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", () => dispatchDeleteToDo(toDo.id));
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
