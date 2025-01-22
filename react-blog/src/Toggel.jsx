import { useState } from "react"
import React from 'react'

function Toggel() {

    const [isOn, setIsOn] = useState(true)

  return (
    <>
        <h1>Toggle Function</h1>
        <button onClick={()=>setIsOn(!isOn)}>
        {
            isOn ? <h1>This Is ON</h1> : <h1>This Is OFF</h1>
        }
        </button>

        


    </>
  )
}

export default Toggel
