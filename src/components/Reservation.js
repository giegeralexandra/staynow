import React from 'react'

const Reservation = (props) =>{

    console.log(props)
    let reservation = props.reservations[props.match.params.id]
    
    return (
        <div>
            <h1>{reservation.rental.name}</h1>
             { reservation ? (reservation.checkin) : null }
        </div>
    )
}

export default Reservation