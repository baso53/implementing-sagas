export const call = (fn, ...args) => {
  return {
    effect: 'effect/CALL',
    payload: fn,
    args: args
  };
}

export const put = (action) => {
  return {
    effect: 'effect/PUT',
    payload: action
  }
}
