import React from 'react'
import './Timer.scss'
import Stats from '../Stats/Stats'
import { connect } from 'react-redux'

const Timer = ({ timeLeft, timeSpent, isPaused }) => {
  return (
    <div className="timer">
      <div className="timer__main">
        <div className="timer__controls">
          <button className="timer__button">+1</button>
          <button className="timer__button">+2</button>
          <button className="timer__button">=10</button>
        </div>
        <div className="timer__time">
          <span className="timer__minutes">{timeLeft / 60 / 60 / 1000}</span>
          :
          <span className="timer__seconds">00</span>
          .
          <span className="timer__milliseconds">000</span>
        </div>
        <div className="timer__controls">
          <button className="timer__button timer__button--success">Start</button>
          <button className="timer__button timer__button--danger">Reset</button>
        </div>
      </div>
      <Stats />
    </div>
  )
}

const mapStateToProps = (state) => ({
  timeLeft: state.timer.timeLeft,
  timeSpent: state.timer.timeSpent,
  isPaused: state.timer.isPaused
})

export default connect(mapStateToProps)(Timer)
