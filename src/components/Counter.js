import React, { useState, useEffect } from 'react';
import "./Counter.css";

const Counter = ({ id, onDelete }) => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [countDirection, setCountDirection] = useState(1);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + countDirection);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused, countDirection]);

  const handleTogglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleToggleDirection = () => {
    setCountDirection((prevDirection) => -prevDirection);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="counter-box text-center mt-5">
      <div className="counter-number">{count}</div>
      <div className="counter-buttons">
        <button type="button" onClick={handleTogglePause} className='btn btn-outline-warning btn-same-css pause'>{isPaused ? 'Play' : 'Pause'}</button>
        <button type="button" onClick={handleToggleDirection} className='btn btn-outline-secondary btn-same-css'>{countDirection === 1 ? 'Count Down' : 'Count Up'}</button>
        <button type="button" onClick={handleDelete} className='btn btn-outline-danger btn-same-css'>Delete</button>
      </div>
    </div> 
  );
};

export default Counter