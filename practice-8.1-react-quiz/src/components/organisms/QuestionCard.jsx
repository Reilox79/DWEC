import QuestionHeader from '../molecules/QuestionHeader'
import AnswerOption from '../molecules/AnswerOption'
import './QuestionCard.css'

// Color of each answer: 'idle', 'correct' or 'wrong'
function getStatus(answer, question, selected, locked) {
  if (!locked) return 'idle'
  if (answer === question.correct) return 'correct'
  if (answer === selected) return 'wrong'
  return 'idle'
}

function QuestionCard({ question, selected, locked, onSelect }) {
  const titleId = 'question-' + question.id

  return (
    <fieldset className='question-card' disabled={locked} aria-labelledby={titleId}>
      <QuestionHeader
        id={titleId}
        category={question.category}
        difficulty={question.difficulty}
        text={question.text}
      />

      <div className='question-card__answers'>
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer}
            name={'answer-' + question.id}
            text={answer}
            checked={selected === answer}
            status={getStatus(answer, question, selected, locked)}
            disabled={locked}
            onSelect={(text) => onSelect(question.id, text)} // Add the question id
          />
        ))}
      </div>

      {locked && (
        <p className='question-card__feedback' role='status'>
          {selected === question.correct ? 'Correct!' : 'The right answer was: ' + question.correct}
        </p>
      )}
    </fieldset>
  )
}

export default QuestionCard
