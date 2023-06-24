import React from 'react';
import "./RegistrationForm.css";

// importing password validator library to validate password

const RegistrationForm = ({ states, setStates, handleSubmit, validation }) => {

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="input">
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={states.fname}
                    onChange={e => setStates({
                        ...states,
                        fname: e.target.value
                    })}
                />
            </div>
            <div className="input">
                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={states.lname}
                    onChange={e => {
                        setStates({
                            ...states,
                            lname: e.target.value
                        })
                    }}
                />

            </div>
            <div className="input">
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={states.email}
                    className={!validation.regexForEmail.test(states.email) && (states.email !== "") ? "error" : ""}
                    onChange={e => {
                        setStates({
                            ...states,
                            email: e.target.value
                        })
                    }}
                    required
                />
            </div>
            <div className="input">
                <label htmlFor="pswd">Password</label>
                <input
                    type="password"
                    id="pswd"
                    name="pswd"
                    value={states.pswd}
                    className={!validation.pswdSchema.validate(states.pswd) && (states.pswd !== "") ? "error" : ""}
                    onChange={e => {
                        setStates({
                            ...states,
                            pswd: e.target.value
                        })
                    }}
                    required
                />
            </div>
            <div className="input">
                <label htmlFor="cnfrmpswd">Confirm Password</label>
                <input
                    type="password"
                    id="cnfrmpswd"
                    name="confirmPswd"
                    className={(states.pswd !== states.cnfrmPswd) && (states.cnfrmPswd !== "") ? "error" : ""}
                    value={states.cnfrmPswd}
                    onChange={e => {
                        setStates({
                            ...states,
                            cnfrmPswd: e.target.value
                        })
                    }}
                    required
                />
            </div>
            <div className="tandc">
                <input
                    type="checkbox"
                    name="consent"
                    id="tnc"
                    checked={states.consent}
                    onChange={e => {
                        setStates({
                            ...states,
                            consent: !states.consent
                        })
                    }}
                    required
                />
                <label htmlFor="tnc">I agree to <a href="#">terms and condition</a></label>
            </div>
            <button
                type="submit"
            >Register</button>
        </form>
    )
}

export default RegistrationForm
