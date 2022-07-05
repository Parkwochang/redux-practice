import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>삭제</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  //여기서는 ownprops가 중요하다
  return {
    onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
