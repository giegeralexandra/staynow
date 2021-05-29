import React from 'react'
import {Route, Link} from 'react-router-dom'

const Trips = (props) =>{

    // let trips = props.Trips
    console.log(props)

    return (
        <div>
            Trip
            {props.trips.map(trip =>
                <li key={trip.id}>
                    <Link to={`trips/${trip.id}`}>
                    {trip.checkin} - {trip.checkout}
                    </Link>
                </li>
            )}
        </div>
    )
}

export default Trips