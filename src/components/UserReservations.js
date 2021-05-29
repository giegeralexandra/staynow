import React from 'react'
import {Route, Link} from 'react-router-dom'

const UserReservations = (props) =>{

    // let trips = props.Trips
    console.log(props)

    const reservationViews = props.reservations.length > 0 ? <div>
    UserReservation
    {props.reservations.map(reservation =>
        <li key={reservation.id}>
            <Link to={`reservations/${reservation.id}`}>
            {reservation.checkin} - {reservation.checkout} - {reservation.id}
            </Link>
        </li>
    )}
</div> : null 

    return (
        reservationViews
    )
}

export default UserReservations