import React from "react";
import { useSelector } from "react-redux";
import { getTotalScore } from "../../features/rejection/rejection-reducer";

import Title from "../../features/rejection/Title";
import CircleCounter from "../../features/rejection/CircleCounter";
import InputFormContainer from "../../features/rejection/InputFormContainer";

const InputAndScoreContainer = () => {
  const score = useSelector(getTotalScore);
  return (
    <div>
      <Title text={"Score"} />
      <CircleCounter data={score} />
      <InputFormContainer />
    </div>
  );
};

export default InputAndScoreContainer;
