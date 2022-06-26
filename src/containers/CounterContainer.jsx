import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 hook이다
  //state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
}

//useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 hhok 입니다
