import React from 'react'
// import {connect} from 'react-redux'

import Reservations from '../components/Reservations'
import ReservationInput from '../components/ReservationInput'
// import {fetchReservations} from '../actions/fetchReservations'

class ReservationsContainer extends React.Component {
 //why should it be component? because it has functions and component did mount
 
    // componentDidMount(){
    //     this.props.fetchReservations()
    // }

    render(){
        return(
            <div>
                <ReservationInput/>
                <Reservations reservations={this.props.rental && this.props.rental.reservations}/>
                {/* <Reservations /> */}
                {/* <Reservations reservations={this.props.reservations}/> */}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         reservations: state.reservations
//     }
// }

export default (ReservationsContainer)

