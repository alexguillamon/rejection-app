import { describe } from "riteway";
import { call, put, select } from "redux-saga/effects";
import { loadLocalStore, saveState } from "../../shared/utils";

import { fetchLocalStateGen, saveToLocalStateGen } from "./rejection-saga";
import { addQuestions, slice } from "./rejection-reducer";


describe("rejection/saga: fetchLocalStateGen", async assert => {

  const saga = fetchLocalStateGen();
  assert({
    given: "nothing",
    should: "calls local store api",
    actual: saga.next().value,
    expected: call(loadLocalStore),
  });

  assert({
    given: "nothing",
    should: "dispatches an add question action",
    actual: saga.next({[slice]:[]}).value,
    expected: put(addQuestions()),
  });

  assert({
    given: "nothing",
    should: "finalizes",
    actual: saga.next().done,
    expected: true,
  });

});

describe("rejection/saga: saveToLocalStateGen", async assert => {

  const saga = saveToLocalStateGen();

  const state = {[slice]:[]}
  assert({
    given: "nothing",
    should: "selects state",
    actual: saga.next().value,
    expected: select(),
  });

  assert({
    given: "nothing",
    should: "save state to the store",
    actual: saga.next(state).value,
    expected: call(saveState, state),
  });

  assert({
    given: "nothing",
    should: "finalizes",
    actual: saga.next().done,
    expected: true,
  });

});

