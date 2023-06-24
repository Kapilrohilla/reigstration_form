import { useEffect, useState } from 'react';

// necessary files
import './App.css'
import validation from "./js/validation";

// componenet
import RegistrationForm from './componenet/RegistrationForm/RegistrationForm';
import LoginForm from './componenet/loginForm/LoginForm';
import AfterLogin from './componenet/AfterLogin/AfterLogin';

function App() {
  // inital state value for registration form data
  const initialRegnState = {
    fname: "",
    lname: "",
    email: "",
    pswd: "",
    cnfrmPswd: "",
    consent: false
  }
  // initial state value for login form data
  const initialLoginState = {
    email: "",
    pswd: ""
  }
  // state for registration form data
  const [regnData, setRegnData] = useState(initialRegnState);
  // state for login form data
  const [loginData, setLoginData] = useState(initialLoginState);
  // state to move from loginPage to loggedIn page
  const [login, setLogin] = useState(false);
  // state to handle local storage
  const [storedLoginDetail, setStoredLoginDetail] = useState([]);
  // state to switch from registration form to login form
  const [alreadyAccount, setAlreadyAccount] = useState(false);

  // function to handle registration form data
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
      const isAreadyPresent = storedLoginDetail.filter(obj => {
        return obj.email === regnData.email;
      })
      console.log(isAreadyPresent);
      if (isAreadyPresent[0] === undefined) {
        setStoredLoginDetail(storedLoginDetail.concat({
          name: `${regnData.fname} ${regnData.lname}`,
          email: regnData.email,
          pswd: regnData.pswd
        }))
        localStorage.setItem("userDetail", JSON.stringify(storedLoginDetail.concat({
          name: `${regnData.fname} ${regnData.lname}`,
          email: regnData.email,
          pswd: regnData.pswd
        })))
        alert(`${regnData.email} is registered successfully`);

      } else {
        alert(`${regnData.email} is already registered`)
      }
    }
    setRegnData(initialRegnState);
    setAlreadyAccount(true);
  }
  // function to handle login form data
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validation.regexForEmail.test(loginData.email)) {
      console.log("enter Email in correct format");
      return;
    } else if (!validation.pswdSchema.validate(loginData.pswd)) {
      console.log("pswd isn't valid");
      return;
    } else {
      const loginMatch = storedLoginDetail.filter(obj => {
        return obj.email === loginData.email && obj.pswd === loginData.pswd
      })[0]
      if (loginMatch !== undefined) {
        setLoginData(initialLoginState);
        alert("login credential matched successfully");
        setLogin(true);
      } else {
        alert("Please provide correct login credential");
      }
    }
  }

  useEffect(() => {
    const previousLoginData = JSON.parse(localStorage.getItem("userDetail"));
    if (previousLoginData !== null) {
      setStoredLoginDetail(storedLoginDetail.concat(previousLoginData));
    }
  }, []);
  return (
    <div className='container'>
      {
        login
          ? <AfterLogin states={loginData} handleLogin={setLogin} />
          : <div className="form">
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
                !alreadyAccount ? <RegistrationForm states={regnData} setStates={setRegnData} handleSubmit={handleRegnSubmit} validation={validation} /> : <LoginForm states={loginData} setStates={setLoginData} handleSubmit={handleLoginSubmit} validation={validation} />
              }
            </div>
          </div>
      }


    </div>
  )
}
export default App;