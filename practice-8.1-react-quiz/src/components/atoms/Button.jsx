import './Button.css'

// Used by StartScreen, ScorePanel and QuizPage
// children = the text between <Button> and </Button>
function Button({ children, onClick, disabled }) {
  return (
    <button className='button' type='button' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
