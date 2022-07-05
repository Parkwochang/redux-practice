import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams().id;
  const todos = useSelector((state) => state);
  const text = todos.find((todo) => todo.id === parseInt(params));

  return (
    <>
      <h1>{text?.text}</h1>
      <h3>Create at : {text.id}</h3>
    </>
  );
}

export default Detail;
