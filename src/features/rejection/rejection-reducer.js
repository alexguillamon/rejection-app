import cuid from "cuid";
import produce from "immer";

const slice = 'questionsReducer';

const addQuestion = ({
  id = cuid(),
  timestamp = Date.now(),
  question,
  askee,
  status
} = {}) => ({
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

const QUESTION_STATUS = {
  Accepted: 'accepted',
  Rejected: 'rejected',
  Pending: 'pending'
}


const questionsReducer = (state = [], {type, payload}={}) => {
  switch (type) {
    case addQuestion.type:     
      return [...state, payload]

    case updateQuestion.type:
      // BUG: You mutated the original state. FIXED
      // Tip: Try immer if you want to do direct
      // assignment like this. It's cool.
      return produce(state, draft => {
        const index = draft.findIndex(q => q.id === payload.id);
        draft[index].status = payload.status
      })
      
    default:
      return state
  }
}

const scoreReducerHelper = (score, {status}) => 
  status === QUESTION_STATUS.Rejected ? score + 10 :
  status === QUESTION_STATUS.Accepted ? score + 1 :
  status === QUESTION_STATUS.Pending ? score :
  score

const getTotalScore = (state) => state[slice].reduce(scoreReducerHelper, 0);

const selectQuestions = (state) => state[slice];

const selectQuestionById = (state, id) => selectQuestions(state).find(q => q.id === id);

export {slice, questionsReducer, addQuestion, updateQuestion, selectQuestions, selectQuestionById, getTotalScore, QUESTION_STATUS };