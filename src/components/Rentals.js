import React from 'react'
import {Link} from 'react-router-dom'

const Rentals = (props) => {


    const rentalViews = props.rentals.length > 0 ?
         <div>
            <h1 className="text-3xl">Rentals </h1>
             {props.rentals.map((rental) => 
            <li key={rental.id}>
                <Link to={`/rentals/${rental.id}`}>
                    {rental.name}
                </Link>
            </li>)}
            <br></br>
        </div> : null 

    return (
        rentalViews
    )
}

export default Rentals