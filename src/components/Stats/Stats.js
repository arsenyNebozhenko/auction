import React, { useEffect } from 'react'
import './Stats.scss'
import { connect } from 'react-redux'
import { updateStatsTime } from '../../actions/stats'
import { msToTime } from '../../utils'

const Stats = ({ time, money, updateStatsTime }) => {
  useEffect(() => {
    setTimeout(() => {
      updateStatsTime(time + 1000)
    }, 1000)
  }, [time, updateStatsTime])

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
  updateStatsTime: (value) => dispatch(updateStatsTime(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
