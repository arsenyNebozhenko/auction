import React, { useEffect } from 'react'
import './Stats.scss'
import { connect } from 'react-redux'
import { updateStats } from '../../actions/stats'

const Stats = ({ time, money, updateStats }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateStats('time', time + 1000)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [time, updateStats])

  return (
    <div className="stats">
      <div className="stats__time">Потрачено: {time / 1000} секунд</div>
      <div className="stats__separator">|</div>
      <div className="stats__money">₽ 0</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  time: state.stats.time,
  money: state.stats.money
})

const mapDispatchToProps = (dispatch) => ({
  updateStats: (name, value) => dispatch(updateStats(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
