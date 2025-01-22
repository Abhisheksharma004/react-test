import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ToDo from './ToDo'
import State from './State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
     {/* <h1>Abhishek Sharma</h1>
     <h2>Hello</h2> */}

     {/* <ToDo /> */}
     <State />
     
    </>
  )
}

export default App
