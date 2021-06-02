import React from 'react'
import {Link} from 'react-router-dom'

const Trip = (props) =>{

    const trip = props.trips.lentgh > 0 ? 
        props.trips.find((trip) => { 
            return trip.id == props.match.params.id
        }) : null 

    const tripView = trip ? 
        <div>   
            <p>Checkin: {trip.checkin}</p>
            <p>Checkout: {trip.checkout}</p>
            <Link class="underline" to={`/rentals/${trip.rental_id}`}>
                Rental
            </Link><br/>
            <Link class="underline" to={`/reservations/${trip.reservation_id}`}>
                Reservation
            </Link>
        </div> : null 

    return (
        tripView
    )
}

export default Trip