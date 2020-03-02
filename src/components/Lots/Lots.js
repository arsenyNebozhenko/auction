import React from 'react'
import './Lots.scss'
import Lot from '../Lot/Lot'

const Lots = () => {
  return (
    <ul className="lots">
      <Lot />
      <Lot />
    </ul>
  )
}

export default Lots
