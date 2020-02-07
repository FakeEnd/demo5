import {
  ADD,
  DELETE
} from '../constants/list'

export const deleteList = (index) => {
  return {
    type: DELETE,
    payload:index
  }
}

export const add = (thing) => {
  return {
    type: ADD,
    payload:thing
  }
}
