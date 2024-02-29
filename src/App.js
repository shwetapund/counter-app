import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      { id: counters.length + 1, key: counters.length + 1 },
    ]);
  };

  const handleDeleteCounter = (id) => {
    setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));
  };

  return (
    <>
    <div className="app-container">
      <header className='text-center mt-5'>
      <button 
      type="button" 
      className="btn button-css text-light fs-5" 
      onClick={handleAddCounter}>
      Add Counter</button>
      </header>
      
      <div className="content-section">
        {counters.length === 0 ? (
          <p className='text-center fw-bold fs-5 mt-5 text-success'>Click on Add Counter</p>
        ) : (
          counters.map((counter) => (
            <Counter key={counter.id} id={counter.id} onDelete={handleDeleteCounter} />
          ))
        )}
      </div>
    </div>
    </>
  )
}

export default App;
