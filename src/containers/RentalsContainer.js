//contain means pass props to other components
//render other components, pass data if required, other functions inside
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Link} from 'react-router-dom'
import Rentals from '../components/Rentals'
import Rental from '../components/Rental'
import RentalInput from '../components/RentalInput'
import {fetchRentals} from '../actions/fetchRentals'

class RentalsContainer extends React.Component {

    
    componentDidMount(){
        // debugger
        // console.log(props)
        this.props.fetchRentals()
        //cannot put just fetchRentals() because you will not be calling this fetchRentals to the redux store 
    }

    // renderRentals = () => this.props.rentals.map((rental) => {
    //     <Rentals key={rental.id} text={
    //         <li key={rental.id}>
    //             <Link to={`/rentals/${rental.id}`}>
    //                 {rental.name}
    //             </Link>
    //         </li>
    //         } />
    //     })
    
    render(){
        console.log(this.props)
        return(
            <div>
                <Switch> 
                    {/* switch chooses first route that matches that path */}
                    <Route exact path='/rentals/new' component={RentalInput} />
                    <Route exact path='/rentals/:id' render={(routerProps) => <Rental {...routerProps} rentals={this.props.rentals} />} />
                    <Route path='/rentals' render={(routerProps) => <Rentals {...routerProps} rentals={this.props.rentals} />} />
                    
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    console.log(state)
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps, {fetchRentals})(RentalsContainer)

