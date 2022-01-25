import React from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "./rejection-reducer";
import InputForm from "./InputForm";


const InputFormContainer = () => {
  const dispatch = useDispatch()

  const onSubmit = (data) => dispatch(addQuestion({...data}))

  return <InputForm onSubmit={onSubmit} />
}

export default InputFormContainer;