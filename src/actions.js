

export function addName(payload) {
  return {
    type: 'ADD_NAME',
    payload
  }
}

export function removeName(payload) {
  return {
    type: 'REMOVE_NAME',
    payload
  }
}
