import './App.css';
import { useState } from 'react';

function App() {
  const [count,  setCount] = useState(0);
  return (
    <div className="App">
      <button className='button' onClick={() => setCount(count * 10)}>x10</button>
      <button className='button' onClick={() => setCount(count + 10)}>+10</button>
      <button className='button' onClick={() => setCount(count + 1)}>+</button>
      <button className='button' onClick={() => setCount(count - 1)}>-</button>
      <button className='button' onClick={() => setCount(count - 10)}>-10</button>
      <h1>{count}</h1>
      <button className='button' onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}

export default App;
