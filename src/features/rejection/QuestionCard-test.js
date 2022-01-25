import React from 'react';
import { describe } from "riteway";
import match from "riteway/match";
import render from 'riteway/render-component';
import capitalize from "lodash/capitalize";

import {addQuestion, QUESTION_STATUS} from './rejection-reducer'
import QuestionCard from './QuestionCard';


describe('rejection/QuestionCard component', async assert => {

  const createQuestionComponent = (q) =>{
    return render(<QuestionCard question={q}/>);
  }

  {
    const $ = createQuestionComponent(addQuestion().payload)

    assert({
      given: 'a question object',
      should: 'display a card element',
      actual: $('.card').length,
      expected: 1
    })

    assert({
      given: 'a question object',
      should: 'display question text',
      actual: $('.question-text').length,
      expected: 1
    })
    assert({
      given: 'a question object',
      should: 'display question askee',
      actual: $('.askee-text').length,
      expected: 1
    })
  }

  {
    const $ = createQuestionComponent(
      addQuestion({
        status:QUESTION_STATUS.Pending
      }).payload
    );

    assert({
      given: 'a pending question',
      should: 'display two buttons',
      actual: $('.button').length,
      expected: 2
    })
  }


  {
    const $ = createQuestionComponent(
      addQuestion({
        status:QUESTION_STATUS.Accepted
      }).payload
    );

    const text = capitalize(QUESTION_STATUS.Accepted)

    const contains = match($('.status').html());

    assert({
      given: 'a finalized question',
      should: 'display no buttons',
      actual: $('.button').length,
      expected: 0
    })

    assert({
      given: 'a finalized question',
      should: 'display the finalized capitalized status',
      actual: contains(text),
      expected: text
    })
  }
})