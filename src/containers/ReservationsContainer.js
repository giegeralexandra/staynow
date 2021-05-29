import React from 'react'
import {connect} from 'react-redux'

import ReservationInput from '../components/ReservationInput'
import {fetchReservations} from '../actions/fetchReservations'
import UserReservations from '../components/UserReservations'
import {Route, Switch, Link} from 'react-router-dom'
import Reservation from '../components/Reservation'

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
                <Route exact path='/reservations/new' component={ReservationInput} />
                <Route exact path='/reservations/:id' render={(routerProps) => <Reservation {...routerProps} reservations={this.props.userReservations} />} />
                <Route path='/reservations' render={(routerProps) => <UserReservations {...routerProps} reservations={this.props.userReservations} />} />
            </Switch>
            </div>
        )}
}

const mapStateToProps = state => {
    console.log(state)
    return {
        reservations: state.reservations, 
        userReservations: state.currentUser.reservations
    }
}

export default connect(mapStateToProps, {fetchReservations})(ReservationsContainer)

