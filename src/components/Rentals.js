import React from 'react'
import {Route, Link} from 'react-router-dom'
import Rental from './Rental'
import {connect} from 'react-redux'
const Rentals = (props) => {
    // debugger
    // let rentals = props.rentals
    // const [loading, setLoading] = useState(false)

    
    if (!props.rentals[0]){
        return <p>Rentals loading</p>
    }
    // debugger
    return (
        <div>
            {props.rentals.rentals[0].map((rental) => 
            <li key={rental.id}>
                <Link to={`/rentals/${rental.id}`}>
                    {rental.name}
                </Link>
            </li>)}
        </div>
    )
}

export default (Rentals)