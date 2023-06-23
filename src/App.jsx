import './App.css'
import RegistrationForm from './componenet/RegistrationForm'

function App() {

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
          <button>Have An Account</button>
        </div>
        <div className="right">
          <h1>Register Form</h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default App
