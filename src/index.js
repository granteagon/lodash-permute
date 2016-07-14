import isFunction from 'lodash/isFunction'
import isArray from 'lodash/isArray'

export function permute (array, permuter) {
  /* #permute - Moves/permutes items in a javascript array.
     Note: This is a pure function.

    Arguments:
    1. array                (String) : Array to permute.
    2. permuter  (Array or Function) : Used to permute the first argument.
  */
  if (isFunction(permuter)) {
    return array.reduce((r, v, i) => {
      r[permuter(i, v)] = v
      return r
    }, [])
  } else if (isArray(permuter)) {
    return permuter.reduce((r, v, i) => {
      r[i] = array[permuter[i]]
      return r
    }, [])
  }
  return array
}
