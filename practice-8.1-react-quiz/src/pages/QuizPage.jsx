import { useState } from 'react'
import { questions as allQuestions } from '@/data/questions'
import { buildQuiz } from '@/utils/buildQuiz'
import ProgressBar from '@/components/atoms/ProgressBar'
import Button from '@/components/atoms/Button'
import QuestionCard from '@/components/organisms/QuestionCard'
import StartScreen from '@/components/organisms/StartScreen'
import ScorePanel from '@/components/organisms/ScorePanel'
import './QuizPage.css'

const TOTAL = 5 // Questions per game

function QuizPage() {
  const [phase, setPhase] = useState('start') // Current screen: 'start', 'playing' or 'finished'
  const [questions, setQuestions] = useState(() => buildQuiz(allQuestions, TOTAL)) // Arrow = only runs once
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { questionId: answer }

  // Calculated from the state, not stored
  const question = questions[currentIndex]
  const selected = userAnswers[question.id] ?? null // null = not answered yet
  const locked = selected !== null
  const isLast = currentIndex === questions.length - 1
  const score = questions.filter((q) => userAnswers[q.id] === q.correct).length

  function handleSelect(id, answer) {
    setUserAnswers((prev) => ({ ...prev, [id]: answer })) // Copy old answers and add the new one
  }

  function handleNext() {
    if (isLast) {
      setPhase('finished')
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function startGame() {
    setQuestions(buildQuiz(allQuestions, TOTAL))
    setCurrentIndex(0)
    setUserAnswers({})
    setPhase('playing')
  }

  return (
    <main className='quiz-page'>
      <h1 className='quiz-page__title'>Web Dev Quiz</h1>

      {/* Only the screen that matches phase is shown */}
      {phase === 'start' && <StartScreen total={TOTAL} onStart={startGame} />}

      {phase === 'playing' && (
        <>
          <ProgressBar value={currentIndex + 1} max={questions.length} />
          <QuestionCard
            question={question}
            selected={selected}
            locked={locked}
            onSelect={handleSelect}
          />
          <div className='quiz-page__actions'>
            {/* Disabled until the question is answered */}
            <Button onClick={handleNext} disabled={!locked}>
              {isLast ? 'See results' : 'Next question'}
            </Button>
          </div>
        </>
      )}

      {phase === 'finished' && (
        <ScorePanel score={score} total={questions.length} onPlayAgain={startGame} />
      )}
    </main>
  )
}

export default QuizPage
