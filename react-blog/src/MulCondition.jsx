import React from 'react'
import { useState } from 'react'
function MulCondition() {
    const [count, setCount] = useState(1)

    const handleCount = () => {
        setCount(count + 1)
     }


  return (
    <>
        <h1>Multiple Condition {count}</h1>
        <button onClick={handleCount}>Counter : {count}</button>
        {
            count == 1? <h1>Condition 1</h1>
             : count == 2? <h1>Condition 2</h1>
             : count == 3? <h1>Condition 3</h1>:null

        }
    </>
  )
}

export default MulCondition
