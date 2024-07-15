import { useQuestionsStore } from "./store/questions"
import { Button } from "@mui/material"

const useQuestionsData = () => {
  const questions = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const {userSelectedAnswer, correctAnswer} = question
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}

export function Footer() {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginTop: '16px'}}>
      <strong>{`OK: ${correct} - KO: ${incorrect} - ? ${unanswered}`}</strong>
      <div style={{ marginTop: '16px'}}>
        <Button onClick={() => reset()}>Resetear juego</Button>
      </div>

    </footer>
  )
}