import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLocalState } from "./rejection-saga";

import QuestionListDisplay from "./QuestionListContainer";
import InputAndScoreContainer from "./InputAndScoreContainer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchLocalState()), []);
  return (
    <>
      <InputAndScoreContainer />
      <QuestionListDisplay />
    </>
  );
}
