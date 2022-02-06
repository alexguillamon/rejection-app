import { describe } from "riteway";
import { slice, addQuestion, addQuestions, getTotalScore, questionsReducer, updateQuestion } from "./rejection-reducer";


const createState = ({questions = []} = {}) => [...questions];
const withSlice = (state) => ({[slice]: state});

describe('rejection/questionsReducer', async assert =>{
  assert({
    given: 'nothing',
    should: 'return correct initial state',
    actual: questionsReducer(),
    expected: createState()
  })

  {
    const question = {
      id: '1',
      timestamp: 1,
      question: "Can I get a raise",
      askee: 'Boss',
      status: 'Accepted'
    }

    assert({
    given: 'a question object',
    should: 'returns the updated state with the new question in it',
    actual: questionsReducer(questionsReducer(), addQuestion(question)),
    expected: createState({questions: [question]}),
    })
  }

  {
    const questionActions = [
      addQuestion({
        id: '1',
        timestamp: 1,
        question: "Can I get a raise?",
        askee: 'Boss',
        status: 'accepted'
      }),
      addQuestion({
        id: '2',
        timestamp: 2,
        question: "Do you want to marry me?",
        askee: 'Girlfriend',
        status: 'pending'
      })
    ]
  
    const initialState = questionActions.reduce(questionsReducer,[]);

    const expectedState = [initialState[0], {...initialState[1], status: 'accepted'}]

    const updatePayload = {
      id: '2',
      status: 'accepted'
    }

    assert({
      given: 'update to a question',
      should: 'return a state with the updated question',
      actual: questionsReducer(initialState, updateQuestion(updatePayload)),
      expected: expectedState
    })
  }

  {
    const questionActions = [
      addQuestion({
        id: '1',
        timestamp: 1,
        question: "Can I get a raise?",
        askee: 'Boss',
        status: 'accepted'
      }),
      addQuestion({
        id: '2',
        timestamp: 2,
        question: "Do you want to marry me?",
        askee: 'Girlfriend',
        status: 'pending'
      })
    ]
  
    const questionList = questionActions.reduce(questionsReducer,[]);

    assert({
      given: 'a list of questions',
      should: 'return a state with the questions in it',
      actual: questionsReducer(undefined, addQuestions(questionList)),
      expected: createState({questions: questionList})
    })
  }

})

describe('rejection/getTotalScore', async assert => {
  const questionActions = [
    addQuestion({
      id: '1',
      timestamp: 1,
      question: "Can I get a raise?",
      askee: 'Boss',
      status: 'accepted'
    }),
    addQuestion({
      id: '2',
      timestamp: 2,
      question: "Do you want to marry me?",
      askee: 'Girlfriend',
      status: 'rejected'
    }),
    addQuestion({
      id: '3',
      timestamp: 3,
      question: "Invest in my company",
      askee: 'Investor',
      status: 'rejected'
    }),
    addQuestion({
      id: '4',
      timestamp: 4,
      question: "Invest in my company 2",
      askee: 'Investor2',
      status: 'pending'
    })
  ]

  const slice = withSlice(questionActions.reduce(questionsReducer,[]));
  
  assert({
    given: 'the a state with questions objects in it',
    should: 'return the total score',
    actual: getTotalScore(slice),
    expected: 21,
  })

  assert({
    given: 'the a state without questions',
    should: 'return 0',
    actual: getTotalScore(withSlice(questionsReducer())),
    expected: 0,
  })
})