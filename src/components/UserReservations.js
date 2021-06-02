import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addReservation} from '../actions/addReservation'


const UserReservations = (props) =>{

    const reservationViews = props.reservations && props.reservations.length > 0 ? 
        <div>
            <h1 className="text-3xl">Reservations</h1>
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

export default connect(null, {addReservation})(UserReservations)