import { UPDATE_ITEM_PROP } from "./types";

export const updateItemProp = (id, name, value, sort) => ({
  type: UPDATE_ITEM_PROP,
  payload: {
    id,
    name,
    value,
    sort
  }
})
