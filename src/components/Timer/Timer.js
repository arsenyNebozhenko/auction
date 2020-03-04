import React, { useEffect } from 'react'
import './Timer.scss'
import Stats from '../Stats/Stats'
import { connect } from 'react-redux'
import { updateTimer, togglePauseTimer } from '../../actions/timer'
import { msToTime } from '../../utils'

const Timer = ({ timeLeft, isPaused, updateTimer, togglePauseTimer }) => {
  useEffect(() => {
    if (isPaused) return
    setTimeout(() => {
      updateTimer(timeLeft - 63)
    }, 63)
  }, [isPaused, timeLeft, updateTimer])

  return (
    <div className="timer">
      <div className="timer__main">
        <div className="timer__controls">
          <button className="timer__button" onClick={() => updateTimer(timeLeft + 1000 * 60)}>+1</button>
          <button className="timer__button" onClick={() => updateTimer(timeLeft + 1000 * 60 * 2)}>+2</button>
          <button className="timer__button" onClick={() => updateTimer(600000)}>=10</button>
        </div>
        <div className="timer__time">
          {msToTime(timeLeft, 'msm')}
        </div>
        <div className="timer__controls">
          <button className="timer__button timer__button--success" onClick={togglePauseTimer}>{isPaused ? 'Start' : 'Pause'}</button>
          <button className="timer__button timer__button--danger" onClick={() => updateTimer(0)}>Reset</button>
        </div>
      </div>
      <Stats />
    </div>
  )
}

const mapStateToProps = (state) => ({
  timeLeft: state.timer.timeLeft,
  isPaused: state.timer.isPaused
})

const mapDispatchToProps = (dispatch) => ({
  updateTimer: (value) => dispatch(updateTimer(value)),
  togglePauseTimer: () => dispatch(togglePauseTimer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
