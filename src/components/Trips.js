import React from 'react'
import {Route, Link} from 'react-router-dom'

const Trips = (props) =>{

    let tripsView = props.trips.length > 0 ? <div>
    Trip
    {props.trips.map(trip =>
        <li key={trip.id}>
            <Link to={`trips/${trip.id}`}>
            {trip.checkin} - {trip.checkout}
            </Link>
        </li>
    )}
</div> : null

    console.log(props)

    return (
        tripsView
    )
}

export default Trips