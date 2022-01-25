import React from 'react';
import { describe } from "riteway";
import render from 'riteway/render-component';
import QuestionList from './QuestionList';
import { addQuestion } from './rejection-reducer';


describe('rejection/QuestionList component', async assert => {

  const createQuestions = (n) => new Array(n).fill(0).map(() => addQuestion().payload);

  const nOfQuestions = 5;
  const $ = render(
    <QuestionList 
      questions={createQuestions(nOfQuestions)}
    />
  );

  assert({
    given: 'children components',
    should: 'display a list container',
    actual: $('.list').length,
    expected: 1
  })

  assert({
    given: 'children components',
    should: 'display children',
    actual: $('.child').length,
    expected: nOfQuestions
  })
})