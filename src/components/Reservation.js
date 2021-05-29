import React from 'react'
import Rental from './Rental'

const Reservation = (props) =>{

    console.log(props)
    const reservation = props.reservations.find((reservation) => {return reservation.id == props.match.params.id})
    const rental = reservation ? props.rentals[reservation.rental_id-1] : null
    const reservationView = reservation && rental ? 
        <div>
        <h1 className="text-3xl">{rental.name}</h1>
        <p>Checkin: {reservation.checkin}</p>
        <p>Checkout: {reservation.checkout}</p> 
        <p>Total: ${reservation.total_price}</p>
        </div>
        : null
    
    return (
        reservationView
    )
}

export default Reservation