import React, { useState } from "react";
import { QUESTION_STATUS } from "./rejection-reducer";

const {Accepted, Rejected, Pending} = QUESTION_STATUS;

const InputForm = ({ onSubmit }) => {
  const initialState = {
    question: "",
    askee: "",
  }
  const [inputState, setInputState] = useState(initialState);

  const onChange = (input) => (event) => {
    setInputState({ ...inputState, [input]: event.target.value });
  };

  const onClick = (status) => () => {
    onSubmit({ ...inputState, status });
    setInputState(initialState)
  };

  return (
    <div className="form">
      <input
        className="input question-input"
        type="text"
        placeholder="what did you asked?"
        value={inputState.question}
        onChange={onChange("question")}
      />
      <input
        className="input askee-input"
        type="text"
        placeholder="who did you asked?"
        value={inputState.askee}
        onChange={onChange("askee")}
      />
      <div>
        <button className="input-button accepted" onClick={onClick(Accepted)}>
          Accepted
        </button>
        <button className="input-button rejected" onClick={onClick(Rejected)}>
          Rejected
        </button>
        <button className="input-button pending" onClick={onClick(Pending)}>
          Pending
        </button>
      </div>
      <style>
        {`
        .form {
          display: flex;
          flex-direction: column;
          margin: 1rem 0 ;
        }
        .input {
          margin: .5rem 0;
        }
        .input-button {
          margin: .5rem .5rem;
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
        }
        .accepted{
          background-color:#4095c6;
        }

        .rejected {
          background-color:#40c661;
        }
      `}
      </style>
    </div>
  );
};

export default InputForm;
