import React from 'react';
import { describe } from "riteway";
import match from "riteway/match";
import render from 'riteway/render-component';

import InputForm from './InputForm';


describe('rejection/InputForm component', async assert => {

  const $ = render(<InputForm />);

  assert({
    given: 'nothing',
    should: 'display an question input field',
    actual: $('.question-input').length,
    expected: 1
  })

  assert({
    given: 'nothing',
    should: 'display an askee input field',
    actual: $('.askee-input').length,
    expected: 1
  })

  assert({
    given: 'nothing',
    should: 'display 3 buttons',
    actual: $('.input-button').length,
    expected: 3
  })
  
})