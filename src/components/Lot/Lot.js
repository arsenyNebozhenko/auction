import React from 'react'
import './Lot.scss'

const Lot = ({ id, title, price, add, updateItemProp }) => {
  const handleChange = ({ target: { name, value }}) => {
    updateItemProp(id, name, value)
  }

  return (
    <li className="lot">
      <input type="text" className="lot__input lot__input--size-lg" value={title} name="title" onChange={handleChange} />
      <div className="lot__sign">-</div>
      <input type="text" className="lot__input" value={price} name="price" onChange={handleChange} />
      <div className="lot__sign">₽</div>
      <input type="text" className="lot__input lot__input--size-sm" value={add} name="add" onChange={handleChange} />
      <button className="lot__button">+</button>
    </li>
  )
}

export default Lot
