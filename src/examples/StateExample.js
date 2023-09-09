import { useState } from 'react';
import './App.css'

const StateExample = () => {

  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }
  function decrementCounter() {
    if(counter > 0) {
      setCounter(counter - 1)
    }
    else {
      alert("Can't go below 0")
    }
  }

  return (
    <>
      <div className='card flex-apart'>
        <button onClick={decrementCounter}>-</button>
        <span>$ {counter}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
    </>
  );
}

export default StateExample;