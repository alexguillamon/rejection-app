import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { questionsReducer } from "../features/rejection/rejection-reducer";
import rootSaga from "../features/rejection/rejection-saga";
import { saveState } from "../shared/utils";
import throttle from "lodash/throttle";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({questionsReducer})
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store;