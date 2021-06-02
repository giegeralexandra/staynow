import "tailwindcss/tailwind.css"
import React from 'react'; 
import { connect } from 'react-redux'
import TripsContainer from './containers/TripsContainer'
import ReservationsContainer from './containers/ReservationsContainer'
import RentalsContainer from './containers/RentalsContainer'
import NavBar from './components/NavBar.js'
import Home from './components/Home'
import {getCurrentUser} from "./actions/setCurrentUser"

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render(){

    return (
      this.props.currentUser ? (
        <div className = "justify-items-center">
        <NavBar />
        <RentalsContainer/>
        <TripsContainer/>
        <ReservationsContainer/>
        </div>
        ) : 
        (
        <div className = "App">
          <Home/>
        </div>
        )
    )

  }

}

const mapStateToProps = state => {
  // console.log(state)
  return {
    currentUser: state.currentUser,
  }
}
export default connect(mapStateToProps, {getCurrentUser})(App);

