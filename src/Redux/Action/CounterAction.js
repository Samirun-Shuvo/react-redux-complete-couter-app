import { DECREMENT, INCREMENT, RESET } from '../Constans/Constans';
export const incrementCounter = () => {
  return {
    type: INCREMENT,
  }
}
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  }
}
export const resetCounter = () => {
  return {
    type: RESET,
  }
}