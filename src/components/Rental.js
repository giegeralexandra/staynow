import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ReservationInput from './ReservationInput'

const Rental = (props) => {

    const rental = props.rentals.length > 0 ?
        props.rentals.find((rental) => {
            return rental.id == props.match.params.id
        }) : null 

    const rentalView = rental ?  
        <div>
            <h1 className="text-3xl">{rental.name}</h1>
            <p>Description: {rental.description}</p>
            <p>Rental Type: {rental.rental_type}</p>
            <p>Price per night: ${rental.price}</p><br></br>
            <ReservationInput rental={rental} currentUser={props.currentUser}/>
        </div> : null

    return(
        rentalView
    )

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Rental); withRouter(Rental)