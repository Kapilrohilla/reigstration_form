import React from 'react';
import "./RegistrationForm.css";

const RegistrationForm = () => {
    return (
        <form>
            <div className="input">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" />
            </div>
            <div className="input">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" />
            </div>
            <div className="input">
                <label htmlFor="email">email</label>
                <input type="email" id="email" />
            </div>
            <div className="input">
                <label htmlFor="pswd">Password</label>
                <input type="password" id="pswd" />
            </div>
            <div className="input">
                <label htmlFor="cnfrmpswd">Confirm Password</label>
                <input type="password" id="cnfrmpswd" />
            </div>
            <div className="tandc">
                <input type="checkbox" name="Terms and condition" id="tnc" />
                <label htmlFor="tnc">I agree to <a href="#">terms and condition</a></label>
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegistrationForm
