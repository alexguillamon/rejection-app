import {
  put,
  call,
  takeEvery,
  all,
  select,
  throttle,
} from "redux-saga/effects";
import { loadLocalStore, saveState } from "../../shared/utils";
import { slice, addQuestions } from "./rejection-reducer";

export const fetchLocalState = () => ({
  type: fetchLocalState.type,
});
fetchLocalState.type = "rejection/fetchLocalState";

export function* fetchLocalStateGen() {
  const localState = yield call(loadLocalStore);
  if (!localState) return;
  yield put(addQuestions(localState[slice]));
}

export function* watchFetchLocalState() {
  yield takeEvery(fetchLocalState.type, fetchLocalStateGen);
}

export function* saveToLocalStateGen() {
  const state = yield select();
  yield call(saveState, state);
}

export function* watchSaveToLocalState() {

  yield throttle(500, "*", saveToLocalStateGen);
}

export default function* rootSaga() {
  yield all([watchFetchLocalState(), watchSaveToLocalState()]);
}
