import { describe } from "riteway";
import { addQuestion, getTotalScore, questions, updateQuestion } from "./rejection-reducer";

describe('questions Reducer', async assert =>{
  assert({
    given: 'nothing',
    should: 'return correct initial state',
    actual: questions(),
    expected: []
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
    actual: questions(questions(), addQuestion(question)),
    expected:[question],
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
  
    const state = questionActions.reduce(questions,[]);

    const updatePayload = {
      id: '2',
      status: 'accepted'
    }

    assert({
      given: 'update to a question',
      should: 'return a state with the updated question',
      actual: questions(state, updateQuestion(updatePayload)),
      expected: [state[0], {...state[1], status: 'accepted'}]
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
    })
  ]

  const state = questionActions.reduce(questions,[])
  
  assert({
    given: 'the a state with questions objects in it',
    should: 'return the total score',
    actual: getTotalScore(state),
    expected: 21,
  })

  assert({
    given: 'the a state without questions',
    should: 'return 0',
    actual: getTotalScore(questions()),
    expected: 0,
  })
})