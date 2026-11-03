import Button from '../atoms/Button'
import './ScorePanel.css'

function getMessage(score, total) {
  if (score === total) return 'Perfect! You got every answer right.'
  if (score >= total / 2) return 'Good job! You know your stuff.'
  return 'Keep practising!'
}

function ScorePanel({ score, total, onPlayAgain }) {
  return (
    <div className='score-panel'>
      <h2>
        Your score: {score} / {total}
      </h2>
      <p className='score-panel__message'>{getMessage(score, total)}</p>
      <Button onClick={onPlayAgain}>Play again</Button>
    </div>
  )
}

export default ScorePanel
