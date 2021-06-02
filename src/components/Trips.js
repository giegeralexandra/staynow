import React from 'react'
import {Link} from 'react-router-dom'

const Trips = (props) => {

    let tripsView = props.trips && props.trips.length > 0 ? 
        <div>
            <h1 className="text-3xl">Trips</h1>
            {props.trips.map(trip =>
                <li key={trip.id}>
                    <Link to={`trips/${trip.id}`}>
                    {trip.checkin} - {trip.checkout}
                    </Link>
                </li>
            )}
        </div> : null

    return (
        tripsView
    )
}

export default Trips