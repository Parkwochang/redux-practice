import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
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
    </>
  );
}
