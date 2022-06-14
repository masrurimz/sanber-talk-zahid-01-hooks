import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  // Bad Practice
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}

export default App;
