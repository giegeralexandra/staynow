import React from 'react'
import {Route, Link} from 'react-router-dom'
import Rental from './Rental'
import {connect} from 'react-redux'

const Rentals = (props) => {
    // debugger
    // const [loading, setLoading] = useState(false)

    
    // if (!props.rentals[0]){
    //     return <p>Rentals loading</p>
    // }
    // debugger
    return (
        console.log(props),
        <div>
            Rentals
            {props.rentals.map((rental) => 
            <li key={rental.id}>
                <Link to={`/rentals/${rental.id}`}>
                    {rental.name}
                </Link>
            </li>)}
            <br>
            </br>
           
        </div>
    )
}

export default (Rentals)