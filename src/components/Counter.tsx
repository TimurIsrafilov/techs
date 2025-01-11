import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOnIncrementClick = () => {
    setCount(count + 1);
  };

  const handleOnDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2 className={styles.text}>{count}</h2>
      <button onClick={handleOnIncrementClick}>increment</button>
      <button onClick={handleOnDecrementClick}>decrement</button>
    </div>
  );
};
