import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Redux/Action/CounterAction';

const Counter = () => {
  const count = useSelector(state => state.count);
  console.log(count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter())
  }
  const handleReset = () => {
    dispatch(resetCounter())
  }
  const handleDecrement = () => {
    dispatch(decrementCounter())
  }
  return (
    <div>
      <h2>Counter app</h2>

      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
