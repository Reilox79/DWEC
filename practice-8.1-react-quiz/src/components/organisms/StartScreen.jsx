import Button from '../atoms/Button'
import './StartScreen.css'

// Props come from QuizPage: total = TOTAL (5), onStart = startGame
function StartScreen({ total, onStart }) {
  return (
    <div className='start-screen'>
      <h2>Ready to test yourself?</h2>
      <p className='start-screen__text'>You will get {total} random questions about web development.</p>
      <Button onClick={onStart}>Start quiz</Button>
    </div>
  )
}

export default StartScreen
