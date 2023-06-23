import { useState } from 'react';
import './App.css'
import RegistrationForm from './componenet/RegistrationForm/RegistrationForm';
import LoginForm from './componenet/loginForm/LoginForm';

function App() {
  const [alreadyAccount, setAlreadyAccount] = useState(true);
  console.log(alreadyAccount)
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
            <li>A password must contain
              <ol type="a">
                <li>a special character</li>
                <li>an alphabet letter</li>
                <li>a number</li>
              </ol>
            </li>
          </ol>
          <button onClick={() => setAlreadyAccount(!alreadyAccount)}>{!alreadyAccount ? "Have An Account" : "Create An Account"}</button>
        </div>
        <div className="right">
          <h1>{!alreadyAccount ? "Registration Form" : "Login"}</h1>
          {
            !alreadyAccount ? <RegistrationForm /> : <LoginForm />
          }
        </div>
      </div>
    </div>
  )
}

export default App
