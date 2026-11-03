import './ProgressBar.css'

function ProgressBar({ value, max }) {
  const percent = (value / max) * 100

  return (
    <div className='progress-bar'>
      <p className='progress-bar__text'>
        Question {value} of {max}
      </p>
      <div
        className='progress-bar__track'
        role='progressbar'
        aria-label='Quiz progress'
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div className='progress-bar__fill' style={{ width: percent + '%' }} />
      </div>
    </div>
  )
}

export default ProgressBar
