import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { slice, questionsReducer } from "../features/rejection/rejection-reducer";
import { loadLocalStore, saveState } from "./localStorage-lib";
import throttle from "lodash/throttle";

const persistedState = loadLocalStore();

const initialState = {[slice]:[
  {
    id: "1",
    timestamp: 1,
    question: "Can I get a raise?",
    askee: "Boss",
    status: "pending",
  },
  {
    id: "2",
    timestamp: 2,
    question: "Do you want to marry me?",
    askee: "Girlfriend",
    status: "rejected",
  },
  {
    id: "3",
    timestamp: 3,
    question: "Invest in my company",
    askee: "Investor",
    status: "accepted",
  },
  {
    id: "4",
    timestamp: 4,
    question: "Invest in my company 2",
    askee: "Investor2",
    status: "pending",
  },
]};

const rootReducer = combineReducers({questionsReducer})
const store = createStore(
  rootReducer,
  persistedState,
  // initialState,
  devToolsEnhancer()
)

store.subscribe(throttle(() => saveState(store.getState()), 1000))

export default store;