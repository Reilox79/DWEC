import './AnswerOption.css'

function AnswerOption({ name, text, checked, status, disabled, onSelect }) {
  // Keep only the classes that apply (filter removes the false ones)
  const classes = [
    'answer-option',
    checked && 'answer-option--selected',
    status === 'correct' && 'answer-option--correct',
    status === 'wrong' && 'answer-option--wrong',
    disabled && 'answer-option--disabled',
  ]
    .filter(Boolean)
    .join(' ')

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
