import React from 'react'
import './Lots.scss'
import Lot from '../Lot/Lot'
import { connect } from 'react-redux'
import { updateItemProp, addLot } from '../../actions/lots'
import { updateMoney } from '../../actions/stats'

const Lots = ({ lots, updateItemProp, addLot, updateMoney }) => {
  updateMoney(lots.reduce((acc, cur) => acc + cur.price, 0))

  return (
    <div className="lots">
      <ul className="lots__list">
        {lots.map(lot => 
          <Lot 
            key={lot.id} 
            id={lot.id} 
            title={lot.title} 
            price={lot.price} 
            add={lot.add} 
            updateItemProp={updateItemProp} 
          />
        )}
      </ul>
      <button className="lots__button" onClick={addLot}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  lots: state.lots
})

const mapDispatchToProps = (dispatch) => ({
  updateItemProp: (id, name, value, sort) => dispatch(updateItemProp(id, name, value, sort)),
  addLot: () => dispatch(addLot()),
  updateMoney: (value) => dispatch(updateMoney(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Lots)
