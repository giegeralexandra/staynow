import React from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
const Home = () => {
    
    return(
        <div>
            Welcome to StayNow! Please 
            <Link to="/login" className="underline"> Login </Link>or
            <Link to="/signup" className="underline"> Signup </Link>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </div>
    )
}

export default Home 