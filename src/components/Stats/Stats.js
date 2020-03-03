import React, { useEffect } from 'react'
import './Stats.scss'
import { connect } from 'react-redux'
import { updateTime } from '../../actions/stats'
import { msToTime } from '../../utils'

const Stats = ({ time, money, updateTime }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(time + 1000)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [time, updateTime])

  return (
    <div className="stats">
      <div className="stats__time">Потрачено: {msToTime(time, 'hms')}</div>
      <div className="stats__separator">|</div>
      <div className="stats__money">₽ {money}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  time: state.stats.time,
  money: state.stats.money
})

const mapDispatchToProps = (dispatch) => ({
  updateTime: (value) => dispatch(updateTime(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
