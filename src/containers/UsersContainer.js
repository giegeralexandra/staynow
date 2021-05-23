import React from 'react'
// import {connect} from 'react-redux'
// import Reservations from '../components/Reservations'
// import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {
 //why should it be component? because it has functions and component did mount
 
    // componentDidMount(){
    //     this.props.fetchUsers()
    // }

    render(){
        return(
            <div>
                Users
                {/* <Reservations reservations={this.props.rental && this.props.rental.reservations}/> */}
                {/* <Reservations /> */}
                {/* <Reservations reservations={this.props.reservations}/> */}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         users: state.users
//     }
// }
// export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
export default (UsersContainer)

