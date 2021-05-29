import { render } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
const Home = () => {
    
    return(
    <div>
        Welcome to StayNow! Please Login
        <Login /><br/> 
        <p><Signup/></p> 
    </div>
    
    )
}

export default Home 