import React from 'react'

const Reservation = (props) =>{

    console.log(props)
    let reservation = props.reservations[props.match.params.id]
    
    return (
        <div>
             { reservation ? (reservation.checkin) : null }
        </div>
    )
}

export default Reservation