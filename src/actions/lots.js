import { UPDATE_ITEM_PROP, ADD_LOT } from "./types";

export const updateItemProp = (id, name, value, sort) => ({
  type: UPDATE_ITEM_PROP,
  payload: {
    id,
    name,
    value,
    sort
  }
})

export const addLot = () => ({
  type: ADD_LOT
})
