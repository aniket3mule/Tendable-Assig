// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './store/actions';

const Counter = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
