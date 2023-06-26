import React, { useState } from 'react'
import './LoginForm.css'
const LoginForm = ({ states, setStates, validation, handleSubmit }) => {
    const [showPswd, setShowPswd] = useState(false);
    return (
        <form className="aicenter" onSubmit={(e) => handleSubmit(e)}>
            <div className="input login">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={states.email}
                    placeholder='eg: xyz@exapmle.com'
                    className={!validation.regexForEmail.test(states.email) && (states.email !== "") ? "error" : ""}
                    onChange={(e) => setStates({
                        ...states,
                        email: e.target.value
                    })}
                    required
                />
            </div>
            <div className="input login">
                <label htmlFor="pswd">Password:</label>
                <div className="pswdInput">
                    <input
                        type={showPswd ? "text" : "password"}
                        id="password"
                        value={states.pswd}
                        placeholder='eg: Aa!1'
                        className={!validation.pswdSchema.validate(states.pswd) && (states.pswd !== "") ? "error" : ""}
                        onChange={(e) => setStates({
                            ...states,
                            pswd: e.target.value
                        })}
                        required
                    />
                    <img src={showPswd ? "eyeclosed.svg" : "eyeopen.svg"} alt="" onClick={() => {
                        setShowPswd(!showPswd)
                    }} />
                </div>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
