import './AnswerOption.css'

// Props come from QuestionCard (one AnswerOption per answer)
function AnswerOption({ name, text, checked, status, disabled, onSelect }) {
  // Each line is a class name or false ("a && b" gives b only if a is true)
  const classes = [
    'answer-option', // Always
    checked && 'answer-option--selected', // If the user picked it
    status === 'correct' && 'answer-option--correct', // Green
    status === 'wrong' && 'answer-option--wrong', // Red
    disabled && 'answer-option--disabled', // If already answered
  ]
    .filter(Boolean) // Remove the false values
    .join(' ') // Join with spaces: "answer-option answer-option--correct"

  return (
    <label className={classes}>
      <input
        type='radio'
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={() => onSelect(text)} // Tell the parent which answer was clicked
      />
      <span>{text}</span>
    </label>
  )
}

export default AnswerOption
