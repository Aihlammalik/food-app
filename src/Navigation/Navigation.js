import React from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Footer from '../CommonComponent/Footer/Footer'
import Appbar from '../CommonComponent/Appbar/Appbar'
import Login from '../Modules/auth/Login/Login'
import Signup from '../Modules/auth/Signup/Signup'
import Home from '../Modules/Home/Home'
export default function Navigation() {
    return (
        <Router>
          <Appbar />
<Switch>
<Route exact path="/">
   <Home/>
</Route>

<Route path="/login">
    <Login/>
</Route>

<Route path="/signup">
    <Signup/>
</Route>



</Switch>
            {/* <Footer/> */}
        </Router>
    )
}
