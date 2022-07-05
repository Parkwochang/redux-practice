import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <>
      <h1>TO Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={onChange}
        />
        <button>추가</button>
      </form>
      <ul>
        {toDo.map((to) => (
          <ToDo key={to.id} {...to} />
        ))}
      </ul>
    </>
  );
}

export default Home;
