import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
