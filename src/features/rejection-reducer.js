import cuid from "cuid";

const addQuestion = ({
  id = cuid(),
  timestamp = Date.now(),
  question,
  askee,
  status
}) => ({
  type: addQuestion.type,
  payload:{
    id,
    timestamp,
    question,
    askee,
    status
  }
});
addQuestion.type = 'rejection/add';

const updateQuestion = ({
  id,
  status
}) => ({
  type: updateQuestion.type,
  payload: {
    id,
    status
  }
});
updateQuestion.type = 'rejection/update'


const rejectionReducer = (state = [], {type, payload}={}) => {
  switch (type) {
    case addQuestion.type:     
      return [...state, payload]

    case updateQuestion.type:
      const questionIndex = state.findIndex((question) => question.id === payload.id);
      const newState = [...state];
      newState[questionIndex].status = payload.status
      return newState
      
    default:
      return state
  }
}

const scoreReducerHelper = (score, {status}) => 
  status === 'rejected' ? score + 10 :
  status === 'accepted' ? score + 1 :
  score

const getTotalScore = (state) => state.reduce(scoreReducerHelper, 0);

export {rejectionReducer, addQuestion, getTotalScore, updateQuestion};