import React, { useState } from 'react';
import './App.css';

function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/multiply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x: Number(x), y: Number(y) }),
      });
      
      const data = await response.json();
      setResult(data.result);
      setError('');
    } catch (err) {
      setError('Error calculating result');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplication Calculator</h1>
        <form onSubmit={handleCalculate}>
          <div className="input-group">
            <input
              type="number"
              value={x}
              onChange={(e) => setX(e.target.value)}
              placeholder="Enter X"
              required
            />
            <span>×</span>
            <input
              type="number"
              value={y}
              onChange={(e) => setY(e.target.value)}
              placeholder="Enter Y"
              required
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        {result !== null && (
          <div className="result">
            Result: {result}
          </div>
        )}
        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;