import React from 'react'

const Reservation = (props) => {

    const reservation = props.reservations.length > 0 ? 
        props.reservations.find((reservation) => {
            return reservation.id == props.match.params.id
        }) : null 

    const rental = reservation ? 
        reservation.rental : null

    const reservationView = reservation && rental ? 
        <div>
            <h1 className="text-3xl">{rental.name}</h1>
            <p>Checkin: {reservation.checkin}</p>
            <p>Checkout: {reservation.checkout}</p> 
            <p>Total: ${reservation.total_price}</p>
        </div> : null

    return (
        reservationView
    )
}

export default Reservation