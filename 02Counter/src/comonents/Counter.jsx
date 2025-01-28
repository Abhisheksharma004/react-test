import React from 'react'
import { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(0)

    const increse = () => {
        setCount(count + 1)
    }

    const decrese = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>Hello Counter : {count} </h1>
            <h2>Value : {count}</h2>
            <button onClick={increse}>Add++ {count}</button>
            <button onClick={decrese}>Add-- {count}</button>
        </>
    )
}

export default Counter
