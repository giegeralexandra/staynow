import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Rentals from '../components/Rentals'
import Rental from '../components/Rental'
import {fetchRentals} from '../actions/fetchRentals'
import Welcome from '../components/Welcome'

class RentalsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchRentals()
    }
    
    render(){
        return(
            <div>
                <Switch> 
                    <Route path='/rentals/:id' render={(routerProps) => <Rental {...routerProps} rentals={this.props.rentals} />} />
                    <Route path='/rentals' render={(routerProps) => <Rentals {...routerProps} rentals={this.props.rentals} />} />
                    <Route path='*' exact={true} render={Welcome}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        rentals: state.rentals
  }
}

export default connect(mapStateToProps, {fetchRentals})(RentalsContainer)

