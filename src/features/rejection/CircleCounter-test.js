import React from 'react';
import { describe } from "riteway";
import render from 'riteway/render-component';
import CircleCounter from './CircleCounter';


describe('rejection/CircleCounter component', async assert => {
  const count = 35;
  const $ = render(<CircleCounter data={count} />);
  assert({
    given: 'count',
    should: 'display the given count',
    actual: $('.circle').text(),
    expected: count.toString()
  })
})