import React from 'react'
import {connect} from 'react-redux'
import {addReservation} from '../actions/addReservation'
import {Route, Link, Redirect, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import { fetchReservations } from '../actions/fetchReservations'
import Booked from './Booked'

class ReservationInput extends React.Component {
    
    state= {
        checkin: '', 
        checkout: '', 
        price: '' 
    }

    handleChange = (event) => {
        // console.log(event)
        this.setState({
            [event.target.name]: event.target.value
            //inside of brackets because it is an object and needs to locate a key 
        })
    }

    onSubmit = (event) => {
        console.log(this.props)
        // debugger
        event.preventDefault();
        let reservation = {...this.state, rental_id: this.props.rental.id,
            guest_id: this.props.rental.id,}
        this.props.addReservation(reservation)
        
        this.setState({
            checkin: '', 
            checkout: '', 
            rental_id: '', 
            guest_id: '', 
            price: ''  
        })
        this.props.history.push('/booked')
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Reservation Checkin: </label>
                    <input type="date" placeholder="Checkin" name="checkin" value={this.state.checkin} onChange={this.handleChange}/><br/>
                    
                    <label>Reservation Checkout: </label>
                    <input type="date" placeholder="Checkout" name="checkout" value={this.state.checkout} onChange={this.handleChange}/><br/>
                    
                    <br/>
                    <input type="submit" value="Add Reservation"/><br/><br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        currentUser: state.currentUser,
        reservations: state.reservations
    }
}

export default withRouter(connect(mapStateToProps, {addReservation})(ReservationInput))