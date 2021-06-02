import React from 'react'
// import {Redirect} from 'react-router-dom'
import ReservationInput from './ReservationInput'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const Rental = (props) => {

    const rental = props.rentals[props.match.params.id-1]

    const rentalView = rental ?  
    <div>
    <h1 className="text-3xl">{rental.name}</h1>
    <p>Description: {rental.description}</p>
    <p>Rental Type: {rental.rental_type}</p>
    <p>Price per night: ${rental.price}</p><br></br>
    <ReservationInput rental={rental} currentUser={props.currentUser}/>
</div> : null

    console.log(props)
    return(
       
       <div>
           {rentalView}
        </div>
    )

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Rental); withRouter(Rental)