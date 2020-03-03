import React from 'react'
import './Lots.scss'
import Lot from '../Lot/Lot'
import { connect } from 'react-redux'
import { updateItemProp } from '../../actions/lots'

const Lots = ({ lots, updateItemProp }) => {
  return (
    <ul className="lots">
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
  )
}

const mapStateToProps = (state) => ({
  lots: state.lots
})

const mapDispatchToProps = (dispatch) => ({
  updateItemProp: (id, name, value, sort) => dispatch(updateItemProp(id, name, value, sort))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lots)
