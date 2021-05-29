import React from 'react'
import {Link} from 'react-router-dom'

const Trip = (props) =>{

    console.log(props)
    const trip = props.trips.find((trip) => {
        return trip.id == props.match.params.id
    })

    let tripView = trip ? 
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

    // debugger
    console.log(trip)
    return (
        tripView
    )
}

export default Trip