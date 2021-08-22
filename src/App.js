import logo from './logo.svg';
import './App.css';
import Appbar from '../src/CommonComponent/Appbar/Appbar'
import Home from './Modules/Home/Home';
import SignUp from './Modules/auth/Signup/Signup'
import SignIn from './Modules/auth/Login/Login'
import Navigation from './Navigation/Navigation'

function App() {
  return (
 
    <div className="app">
{/* <SignIn /> */}
{/* <SignUp /> */}
{/* <Appbar />
<Home /> */}
<Navigation />
    </div>
  );
}

export default App;
