import React from 'react'
import './Lot.scss'

const Lot = () => {
  return (
    <li className="lot">
      <input type="text" className="lot__input lot__input--size-lg" />
      <div className="lot__sign">-</div>
      <input type="text" className="lot__input" />
      <div className="lot__sign">₽</div>
      <input type="text" className="lot__input lot__input--size-sm" />
      <button className="lot__button">+</button>
    </li>
  )
}

export default Lot
