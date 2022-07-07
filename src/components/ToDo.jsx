import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, id }) {
  // 받아온 state 정보에서 text, id만 잘라서 받는다
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      <Link to={`${id}`}>{text}</Link>
      <button onClick={onClick}>삭제</button>
    </li>
  );
}

export default ToDo;
