import { useState } from 'react';
import '../styles/Counter.css';

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
      <div className="counter-btn-wrapper">
      <button className="counter-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="counter-btn" onClick={handleDecrement}>
        Decrement
      </button>
      </div>
    </div>
  );
};

export default Counter;
