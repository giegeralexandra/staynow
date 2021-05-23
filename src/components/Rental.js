import React from 'react'
import {Redirect} from 'react-router-dom'
import ReservationsContainer from '../containers/ReservationsContainer'
const Rental = (props) => {

    let rental = props.rentals[props.match.params.id - 1]

    return(
        <div>
            {/* {rental ? null : <Redirect to='/rentals'/>} */}
            <h1>{rental ? rental.name : null}</h1>
            <p>{rental ? rental.description : null} - { rental ? rental.rental_type : null} - { rental ? rental.price : null} - { rental ? rental.owner.name : null}</p>
            <ReservationsContainer rental={rental}/>
        </div>
        
    )

}

export default Rental 