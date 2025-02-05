import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsename] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUsename(e.target.value)} placeholder='UserName' /><br/><br/>
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br/><br/>
      <button onClick={handleSubmit}>Login</button><br/><br/>
    </div>
  )
}

export default Login
