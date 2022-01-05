import { createStore } from "redux";
import { rejectionReducer } from "../src/features/rejection-reducer";

const persistedState = []

const store = createStore(
  rejectionReducer,
  persistedState
)

export default store;