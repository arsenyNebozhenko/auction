import React, { useEffect } from 'react'
import './Timer.scss'
import Stats from '../Stats/Stats'
import { connect } from 'react-redux'
import { updateTimerProp } from '../../actions/timer'
import { msToTime } from '../../utils'

const Timer = ({ timeLeft, isPaused, updateTimerProp }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        updateTimerProp('timeLeft', 0)
        updateTimerProp('isPaused', true)
      } else if (!isPaused) {
        updateTimerProp('timeLeft', timeLeft - 63)
      }
    }, 63)
    return () => clearInterval(interval)
  }, [timeLeft, isPaused, updateTimerProp])

  return (
    <div className="timer">
      <div className="timer__main">
        <div className="timer__controls">
          <button className="timer__button" onClick={() => updateTimerProp('timeLeft', timeLeft + 1000 * 60)}>+1</button>
          <button className="timer__button" onClick={() => updateTimerProp('timeLeft', timeLeft + 1000 * 60 * 2)}>+2</button>
          <button className="timer__button" onClick={() => updateTimerProp('timeLeft', 600000)}>=10</button>
        </div>
        <div className="timer__time">
          {msToTime(timeLeft, 'msm')}
        </div>
        <div className="timer__controls">
          <button className="timer__button timer__button--success" onClick={() => updateTimerProp('isPaused', !isPaused)}>{isPaused ? 'Start' : 'Pause'}</button>
          <button className="timer__button timer__button--danger" onClick={() => updateTimerProp('timeLeft', 0)}>Reset</button>
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
  updateTimerProp: (key, value) => dispatch(updateTimerProp(key, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
