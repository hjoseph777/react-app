import React, { useState } from 'react';

function Counter() {
  // Step 2: Initialize state with useState
  const [count, setCount] = useState(0);

  // Step 3 & 4: Display count and add buttons
  return (
    <div>
      <h2>Current Count: {count}</h2>
      {/* Increment Button */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Decrement Button */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
