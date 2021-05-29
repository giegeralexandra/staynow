import React from 'react'
// import {Redirect} from 'react-router-dom'
import ReservationsContainer from '../containers/ReservationsContainer'
import ReservationInput from './ReservationInput'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
const Rental = (props) => {

    const rental = props.rentals[props.match.params.id-1]
// let rental = props.accounts.filter(rental => rental.id == props.mathch.params.id)[0]
    return(
        console.log(rental),
        <div>
            {/* {rental ? null : <Redirect to='/rentals'/>} */}
            <h1 className="text-3xl">{rental ? rental.name : null}</h1>
            <p>Description: {rental ? rental.description : null}</p>
            <p>Rental Type: { rental ? rental.rental_type : null}</p>
            <p>Price per night: ${ rental ? rental.price : null}</p><br></br>
            <ReservationInput rental={rental} />
        </div>
        
    )

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        
    }
}

export default connect(mapStateToProps)(Rental) 