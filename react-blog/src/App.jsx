import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ToDo from './ToDo'
import State from './State'
import Toggel from './Toggel'
import MulCondition from './MulCondition'
import UserProps from './UserProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
     {/* <h1>Abhishek Sharma</h1>
     <h2>Hello</h2> */}

     {/* <ToDo /> */}
     {/* <State /> */}
     {/* <Toggel /> */}
     {/* <MulCondition /> */}
     <UserProps title="Hello" name="Abhishek" />
     
    </>
  )
}

export default App
