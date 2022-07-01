import { legacy_createStore } from "redux";

const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

number.innerText = "0";

const reducer = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(reducer);

countStore.subscribe(() => (number.innerText = countStore.getState()));

plus.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
