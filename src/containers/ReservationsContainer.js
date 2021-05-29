import React from 'react'
import {connect} from 'react-redux'

import {fetchReservations} from '../actions/fetchReservations'
import UserReservations from '../components/UserReservations'
import {Route, Switch, Link} from 'react-router-dom'
import Reservation from '../components/Reservation'
import Booked from '../components/Booked'
class ReservationsContainer extends React.Component {
 //why should it be component? because it has functions and component did mount
 
    componentDidMount(){
        this.props.fetchReservations()
    }

    render(){

        return(
            <div>
            <Switch> 
                {/* switch chooses first route that matches that path */}
                <Route exact path='/reservations/:id' render={(routerProps) => <Reservation {...routerProps} reservations={this.props.reservations} rentals={this.props.rentals} />} />
                <Route exact path='/reservations' render={(routerProps) => <UserReservations {...routerProps} reservations={this.props.reservations} />} />
                <Route path='/booked' render={(routerProps) => <Booked {...routerProps} reservations={this.props.reservations} />} />
            </Switch>
            </div>
        )}
}

const mapStateToProps = state => {
    console.log(state)
    return {
        reservations: state.reservations, 
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, {fetchReservations})(ReservationsContainer)

