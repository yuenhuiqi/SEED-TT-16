import React, { useState } from "react";

const Login = ({ onAdd }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {}
        e.preventDefault()

        if(!password) {
            alert('Please fill in your login details')
            return
        }

    onAdd({ email,password })

    setEmail('')
    setPassword('')

  return (
    <form onLogin={onLogin}>
        <div>
            <label>Email</label>
            <input type='text' placeholder='Insert Email' value={text} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Password</label>
            <input type='text' placeholder='Insert Password' value={text} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type='submit' value='Login'/>
    </form>
  )
}

export default Login
