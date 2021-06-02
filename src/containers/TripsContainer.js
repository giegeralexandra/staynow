import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTrips} from '../actions/fetchTrips'
import Trips from '../components/Trips'
import Trip from '../components/Trip'


class TripsContainer extends React.Component {
 
    componentDidMount() {
        this.props.fetchTrips()
    }
    
    render(){
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
    return {
        trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)
