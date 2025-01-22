import { useState } from 'react';
import React from 'react'

function State() {

    const [fruit, setFruit] = useState("Apple");
    const [counter, setCounter] = useState(0);


    const handleFruit = () => {
        setFruit("Banana");
        console.log(fruit);
    }

    const handleCounter = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    const handleCounter1 = () => {
        setCounter(counter - 1);
        console.log(counter);
    }

  return (
    <>
        <h1>Abhishek Hello</h1>
        <h1>Counter Value : {counter}</h1>

        <h1>{fruit}</h1>

        <button onClick={handleFruit} >Change F Name</button>
        <button onClick={handleCounter} >Update +1</button>
        <button onClick={handleCounter1} >Update -1</button>
    </>
  )
}

export default State
