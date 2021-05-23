import React from 'react'

const Reservations = ({reservations}) =>{

    return (
        <div>
            {reservations.map(reservation => <li key={reservation.id}>{reservation.checkin}</li>)} 
        </div>
    )
}

export default Reservations