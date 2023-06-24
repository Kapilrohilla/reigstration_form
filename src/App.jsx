import { useState } from 'react';

// necessary files
import './App.css'
import validation from "./validation";
// componenet
import RegistrationForm from './componenet/RegistrationForm/RegistrationForm';
import LoginForm from './componenet/loginForm/LoginForm';

function App() {
  // state to switch from registration form to login form
  const [alreadyAccount, setAlreadyAccount] = useState(false);

  const initialRegnState = {
    fname: "",
    lname: "",
    email: "",
    pswd: "",
    cnfrmPswd: "",
    consent: false
  }
  // state for registration form data
  const [regnData, setRegnData] = useState(initialRegnState);

  // to handle registration form data
  const handleRegnSubmit = (e) => {
    e.preventDefault()
    if (!regnData.consent) {
      console.log("Agree T&C");
      return;
    } else if (regnData.pswd !== regnData.cnfrmPswd) {
      console.log("confirm password should be same as password");
    } else if (!validation.regexForEmail.test(regnData.email)) {
      console.log("enter Email in correct format");
    } else {
      setRegnData(initialRegnState)
    }
  }
  return (
    <div className='container'>
      <div className="form">
        <div className="left">
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p>
            <strong>Validation Rules: </strong>
          </p>
          <ol>
            <li>Email must be in correct format</li>
            <li>A password must:
              <ol type="a">
                <li>be within between 4, 16</li>
                <li>contain uppercase and lowercase</li>
                <li>contain digits</li>
                <li>contain symbols</li>
              </ol>
            </li>
          </ol>
          {/* btn to toggle b/w registration form  and login form */}
          <button onClick={() => setAlreadyAccount(!alreadyAccount)}>{!alreadyAccount ? "Have An Account" : "Create An Account"}</button>
        </div>
        <div className="right">
          <h1>{!alreadyAccount ? "Registration Form" : "Login"}</h1>
          {
            !alreadyAccount ? <RegistrationForm states={regnData} setStates={setRegnData} handleSubmit={handleRegnSubmit} validation={validation} /> : <LoginForm />
          }
        </div>
      </div>
    </div>
  )
}

export default App
