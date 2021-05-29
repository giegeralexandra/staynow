import { render } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    
    return(
    <div>
        <Link to="/signup">
            Sign up
        </Link>
        or 
        <Link to="/login" className="text-red-700">
            Login
        </Link>
    </div>
    )
}

export default Home 