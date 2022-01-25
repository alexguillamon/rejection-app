import React from 'react';
import { describe } from "riteway";
import render from 'riteway/render-component';
import match from 'riteway/match';
import Title from './Title';


describe('rejection/Title component', async assert => {
  const text = 'This is the title'
  const $ = render(<Title text={text} />);
  const contains = match($('h1').html());

  assert({
    given: 'a text',
    should: 'display the given text as a title',
    actual: contains(text),
    expected: text
  })
})