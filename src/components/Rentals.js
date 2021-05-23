import React from 'react'
import {Route, Link} from 'react-router-dom'
import Rental from './Rental'


const Rentals = (props) =>{

    return (
        <div>
            {props.rentals.map(rental => 
            <li key={rental.id}>
                <Link to={`/rentals/${rental.id}`}>
                    {rental.name}
                </Link>
            </li>)} 
        </div>
    )
}

export default Rentals