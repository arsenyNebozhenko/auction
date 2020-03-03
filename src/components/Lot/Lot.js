import React from 'react'
import './Lot.scss'

const Lot = ({ id, title, price, add, updateItemProp }) => {
  const handleChange = ({ target: { name, value }}) => {
    updateItemProp(id, name, value)
  }

  const addPrice = () => {
    updateItemProp(id, 'price', +price + +add)
    updateItemProp(id, 'add', '')
  }

  return (
    <li className="lot">
      <input type="text" className="lot__input lot__input--size-lg" value={title} name="title" onChange={handleChange} />
      <div className="lot__sign">-</div>
      <input type="text" className="lot__input" value={price} name="price" onChange={handleChange} />
      <div className="lot__sign">₽</div>
      <input type="text" className="lot__input lot__input--size-sm" value={add} name="add" onChange={handleChange} />
      <button className="lot__button" onClick={addPrice}>+</button>
    </li>
  )
}

export default Lot
