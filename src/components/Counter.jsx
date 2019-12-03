import React, { useState, useEffect, Component } from 'react';

export default function Counter({ user }) {
  const [count, setCount] = useState(0);

  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);

  useEffect(() => {
    debugger
    console.log(`
      DOM surgery is done, after first OR
      subsequent renders. This is where you do:
        - ajax requests
        - further DOM surgery using jQuery
        - set timers
        - set up event listeners
    `);
  });

  console.log(`
    render runs at count of
  `, count);
  debugger
  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
