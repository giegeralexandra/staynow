import React from 'react'
import {connect} from 'react-redux'
import {fetchTrips} from '../actions/fetchTrips'
import tripReducer from '../reducers/tripReducer'
import Trips from '../components/Trips'
import Trip from '../components/Trip'
import {Route, Switch, Link} from 'react-router-dom'


class TripsContainer extends React.Component {
 //why should it be component? because it has functions and component did mount
 
    componentDidMount() {
        this.props.fetchTrips()
    }
    

    render(){
        console.log(this.props)
        return(
            <div>
                <Switch>
                    <Route exact path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} />} />
                    <Route exact path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)
