import React, { useState, useEffect } from 'react';

export const Counter = ({ questionNumber }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) setTimeout(setCount(count - 1), 1000);
  }, [questionNumber, count]);

  return (
    <div>
      <div>Time until next question: {count}</div>
    </div>
  );
};