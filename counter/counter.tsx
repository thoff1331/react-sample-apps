import * as React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <button onClick={() => setCount(count + 1)}> + </button>
      <button> {count} </button>
      <button onClick={() => (count === 0 ? null : setCount(count - 1))}>
        {' '}
        -{' '}
      </button>
      <div className="reset">
        <button onClick={() => setCount(0)}>RESET</button>
      </div>
    </div>
  );
}
