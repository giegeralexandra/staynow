import React from 'react'

const Reservation = (props) =>{

    console.log(props)
    let reservation = props.reservations[props.match.params.id]
    
    return (
        <div>
            Single Reservation
            {reservation.id}
        </div>
    )
}

export default Reservation