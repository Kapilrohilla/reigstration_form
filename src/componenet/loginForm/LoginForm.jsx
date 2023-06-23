import React from 'react'
import './LoginForm.css'
const LoginForm = () => {
    return (
        <form className="aicenter">
            <div className="input login">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="input login">
                <label htmlFor="pswd">Password</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
