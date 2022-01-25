import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import { updateQuestion, selectQuestions, QUESTION_STATUS } from "./rejection-reducer";

const QuestionListDisplay = () => {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  // Candidate to be curried?
  const onUpdate = (status) => (id) => dispatch(updateQuestion({
    id, 
    status
  }));
  
  return <QuestionList 
    questions={questions} 
    onAccept={onUpdate(QUESTION_STATUS.Accepted)} 
    onReject={onUpdate(QUESTION_STATUS.Rejected)}
    />
}

export default QuestionListDisplay;