import { create } from 'zustand'
import { Question } from '../types.d'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

// Without persist
// export const useQuestionsStore = create<State>((set, get) => {
//   return {
//     questions: [],

//     currentQuestion: 0,
    
//     fetchQuestions: async (limit: number) => {
//       const res = await fetch('http://localhost:5173/data.json')
//       const json = await res.json()

//       const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
//       set({ questions })
//     },

//     selectAnswer: (questionId: number, answerIndex: number) => {
//       const state = get()
//       const newQuestions = structuredClone(state.questions)
//       const questionIndex = newQuestions.findIndex(q => q.id === questionId)
//       const questionInfo = newQuestions[questionIndex]

//       const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
//       if (isCorrectUserAnswer) confetti()

//       newQuestions[questionIndex] = {
//         ...questionInfo,
//         isCorrectUserAnswer,
//         userSelectedAnswer: answerIndex
//       }

//       set({ questions: newQuestions })
//     },

//     goNextQuestion: () => {
//       const { currentQuestion, questions } = get()
//       const nextQuestion = currentQuestion + 1

//       if (nextQuestion < questions.length) {
//         set({ currentQuestion: nextQuestion })
//       }
//     },

//     goPreviousQuestion: () => {
//       const { currentQuestion, questions } = get()
//       const previousQuestion = currentQuestion - 1

//       if (previousQuestion >= 0) {
//         set({ currentQuestion: previousQuestion })
//       }
//     }
//   }
// })

// middelware example
// const logger = (config) => (set, get, api) => {
//   return config(
//     (...args) => {
//       console.log(" applying", args)
//       set(...args)
//       console.log(' new state', get())
//     },
//     get,
//     api
//   )
// }

export const useQuestionsStore = create<State>()(persist((set, get) => {
  return {
    questions: [],

    currentQuestion: 0,
    
    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json')
      const json = await res.json()

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const state = get()
      const newQuestions = structuredClone(state.questions)
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]

      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      if (isCorrectUserAnswer) confetti()

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }

      set({ questions: newQuestions })
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },

    goPreviousQuestion: () => {
      const { currentQuestion, questions } = get()
      const previousQuestion = currentQuestion - 1

      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion })
      }
    },

    reset: () => {
      set({ currentQuestion: 0, questions: []})
    }
  }
}, {
  name: 'questions'
}))