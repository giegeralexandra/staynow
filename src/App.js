import React from 'react'; 
// import {connect} from 'react-redux'
//gives access to specifically connect incorporate reatct redux into the application
// import {fetchRentals} from './actions/fetchRentals'
//curly brackets because we did not export default
import RentalsContainer from './containers/RentalsContainer'
// import ReservationsContainer from './containers/ReservationsContainer'
import UsersContainer from './containers/UsersContainer'
import Login from './components/Login'
import { connect } from 'react-redux'
import {getCurrentUser} from "./actions/setCurrentUser"
import Logout from './components/Logout'
import {fetchRentals} from './actions/fetchRentals'
import TripsContainer from './containers/TripsContainer'
import ReservationsContainer from './containers/ReservationsContainer'
import NavBar from './components/NavBar.js'
import Home from './components/Home'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
    // this.props.fetchRentals()
    // this.props.fetchRentals({type: 'FETCH_ACCOUNTS', payload: {name: 'Happy Home'}})
    // fetch('http://localhost:3000/api/v1/rentals')
    // .then(res => res.json())
    // .then(rentals => console.log(rentals))
  }
  
  
  render(){

  return (
    
    this.props.currentUser ? (
      <div className = "App">
      <NavBar />
      <RentalsContainer/>
      <TripsContainer/>
      <ReservationsContainer/>
      <Logout/>
      </div>
    ) : 
    (
    <div className = "App">
      <Home/>
      <Login/>
      <Signup/>
    </div>
    )
    
  )
  }
}

// const mapStateToProps = (state) => {
//   //accessing our values in store as props to give access props
//   return {
//     rentals: state.rentals
//   }
// }

// export default connect(mapStateToProps)(App);
// //connect hey i want access to this part of the store, connecting redux store to specific component

// export default connect(mapStateToProps, {fetchRentals})(App);
// //connect hey i want access to this part of the store, connecting redux store to specific component
// //dispatchStateToProps gives us ability to dispatch new actions to our store directly from the component

// export default connect(mapStateToProps, {fetchRentals})(App);

const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}
export default connect(mapStateToProps, {getCurrentUser, fetchRentals})(App);

//this connect is automatically calling dispatch for us on the return value of fetchRentals
//store.dispatch({type: 'FETCH_ACCOUNTS', payload: {name: 'Happy Home'})

