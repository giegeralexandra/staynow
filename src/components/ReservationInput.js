import React from 'react'
import {connect} from 'react-redux'
import {addReservation} from '../actions/addReservation'
import {Route, Link, Redirect} from 'react-router-dom'

class ReservationInput extends React.Component {
    
    state= {
        checkin: '', 
        checkout: '', 
        rental_id: this.props.rental.id,
        guest_id: this.props.currentUser.id, 
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
    
        event.preventDefault();
        this.props.addReservation(this.state)
        
        this.setState({
            checkin: '', 
            checkout: '', 
            rental_id: '', 
            guest_id: '', 
            price: ''  

        })
        return <Redirect to={`/reservations`} />
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
                    
                    <input type="submit" value="Add Reservation"/><br/><br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {addReservation})(ReservationInput)