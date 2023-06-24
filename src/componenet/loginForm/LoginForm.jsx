import React from 'react'
import './LoginForm.css'
const LoginForm = ({ states, setStates, validation, handleSubmit }) => {
    return (
        <form className="aicenter" onSubmit={(e) => handleSubmit(e)}>
            <div className="input login">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={states.email}
                    className={!validation.regexForEmail.test(states.email) && (states.email !== "") ? "error" : ""}
                    onChange={(e) => setStates({
                        ...states,
                        email: e.target.value
                    })}
                />
            </div>
            <div className="input login">
                <label htmlFor="pswd">Password</label>
                <input
                    type="password"
                    id="password"
                    value={states.pswd}
                    className={!validation.pswdSchema.validate(states.pswd) && (states.pswd !== "") ? "error" : ""}
                    onChange={(e) => setStates({
                        ...states,
                        pswd: e.target.value
                    })}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
