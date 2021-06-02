import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchReservations} from '../actions/fetchReservations'
import UserReservations from '../components/UserReservations'
import Reservation from '../components/Reservation'
import Booked from '../components/Booked'

class ReservationsContainer extends React.Component {
 
    componentDidMount(){
        this.props.fetchReservations()
    }

    render(){

        return(
            <div>
            <Switch> 
                <Route exact path='/reservations/:id' render={(routerProps) => <Reservation {...routerProps} reservations={this.props.reservations} rentals={this.props.rentals} />} />
                <Route exact path='/reservations' render={(routerProps) => <UserReservations {...routerProps} reservations={this.props.reservations} />} />
                <Route path='/booked' render={(routerProps) => <Booked {...routerProps} reservations={this.props.reservations} />} />
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reservations: state.reservations, 
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, {fetchReservations})(ReservationsContainer)

