import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  //mapStateToProps으로부터 전달받은 props
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
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
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}
function mapStateToProps(state) {
  // store에서 state를 받아온다
  return { toDos: state };
} // redux state로부터 home(component)에 prop으로써 전달한다는 의미
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreator.addToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home); // connect()는 home으로 보내주는 props에 추가될 수 있도록 허용해줌
//무엇을 return 한다 해도 component의 prop에 추가될 것이다
