import { createStore } from "redux";
import { rejectionReducer } from "../src/features/rejection-reducer";
import { loadLocalStore, saveState } from "./localStorage-lib";
import throttle from "lodash/throttle";

const persistedState = loadLocalStore();

const store = createStore(
  rejectionReducer,
  persistedState
)

store.subscribe(throttle(() => saveState(store.getState()), 1000))

export default store;