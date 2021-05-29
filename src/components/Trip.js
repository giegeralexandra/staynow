import React from 'react'

const Trip = (props) =>{

    console.log(props)
    let trip = props.trips[props.match.params.id]
    
    return (
        <div>
            {trip ? trip.checkin : null }
        </div>
    )
}

export default Trip