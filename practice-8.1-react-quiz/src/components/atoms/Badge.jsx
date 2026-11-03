import './Badge.css'

// Used by QuestionHeader: children = the category or the difficulty
function Badge({ children }) {
  return <span className='badge'>{children}</span>
}

export default Badge
