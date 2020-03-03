import { UPDATE_ITEM_PROP } from "./types";

export const updateItemProp = (id, name, value) => ({
  type: UPDATE_ITEM_PROP,
  payload: {
    id,
    name,
    value
  }
})
