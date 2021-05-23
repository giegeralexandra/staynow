//contain means pass props to other components
//render other components, pass data if required, other functions inside
import React from 'react'
import {connect} from 'react-redux'

import Rentals from '../components/Rentals'
import RentalInput from '../components/RentalInput'
import {fetchRentals} from '../actions/fetchRentals'

class RentalsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchRentals()
        //cannot put just fetchRentals() because you will not be calling this fetchRentals to the redux store 
    }

    render(){
        return(
            <div>
                <RentalInput/>
                <Rentals rentals={this.props.rentals}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, {fetchRentals})(RentalsContainer)

