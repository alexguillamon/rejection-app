import React from "react";
import QuestionCard from "./QuestionCard";


const QuestionList = ({questions, onAccept, onReject }) => {
  return (
    <div className="list">
      {questions.map((question) => 
        <span className="child" key={question.id}>
          <QuestionCard 
            question={question}
            onAccept={onAccept}
            onReject={onReject}
            />
          </span>
      )}
    </div>
  )
}

QuestionList.defaultProps = { 
  questions: [],
  onAccept: () => {},
  onReject: () => {}
}

export default QuestionList;