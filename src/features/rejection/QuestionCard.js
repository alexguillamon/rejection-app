import React from "react";
import capitalize from "lodash/capitalize";

const QuestionCard = ({ question, onAccept, onReject }) => {
  const { id, question: questionText, askee, status } = question;

  const cardClassName =
    status === "accepted"
      ? "card accepted-card"
      : status === "rejected"
      ? "card rejected-card"
      : "card";
  return (
    <div className={cardClassName}>
      <div className="box">
        <p className="question-text">{questionText}</p>
        <p className="askee-text">
          <span>Askee: </span>
          <span>{askee}</span>
        </p>
      </div>
      {status === "pending" ? (
        <div className="button-box">
          <button className="button accept-button" onClick={() => onAccept(id)}>
            Accepted
          </button>
          <button className="button reject-button" onClick={() => onReject(id)}>
            Rejected
          </button>
        </div>
      ) : (
        <div className="button-box status-box">
          <span className="status">{capitalize(status)}</span>
        </div>
      )}
      <style>
        {`
          .card {
            padding: .5rem 1rem;
            border: 1px solid #eaeaea;
            margin: 1rem;
            display: flex;
            flex-direction: row;
            border-radius: 1.3em;
            justify-content: space-between;
            min-width: 300px;
          }

          .acceptedCard {
            background-color: rgba(64, 149, 198, 0.4);
          }
          .rejectedCard {
            background-color: rgba(64, 198, 97, 0.4);
          }

          .question-text {
            font-size: 1rem;
            margin: .5rem 0;
          }

          .askee-text {
            font-size: .8rem;
            opacity: .5;
            margin: .5rem 0;
          }

          .button-box {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;
          }

          .button {
            display:inline-block;
            padding:0.3rem 1.2rem;
            margin:0 0.3rem 0.3rem 0;
            border-radius:2em;
            text-decoration:none;
            color:#FFFFFF;
            text-align:center;
            background-color:#9dc0d4;
            transition: all 0.2s;
            border: none;
            margin: .5rem 0;

          }
          .accept-button {
            background-color:#4095c6;
          }

          .reject-button {
            background-color:#40c661;
          }

          .status-box {
            composes: buttonBox;
            opacity: .6;
            justify-content: center;
          }
          .status {
          }
        `}
      </style>
    </div>
  );
};

export default QuestionCard;
