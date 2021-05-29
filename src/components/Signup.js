import React from 'react'
import {signup} from "../actions/setCurrentUser"
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'

const Signup = (props) =>{

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...props.formData, 
            [name]: value
        }
        props.updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signup(props.formData)
        // this.props.setState({
        //     email: "", 
        //     password: ""
        // })
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/><p><input type="text"  name="name" value={props.formData.name} onChange={handleChange} placeholder="Name" /></p><br/>
            <br/><p><input type="text"  name="email" value={props.formData.email} onChange={handleChange} placeholder="Email" /></p><br/>
            <p><input type="text" name="password" value={props.formData.password} onChange={handleChange} placeholder="Password" /></p><br/>
            <p><input type="submit" value="Signup"/></p>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        formData: state.signupForm
    }
} 

// const mapDispatchToProps = () => {
//     return {
//         updateSignupForm: updateLoginForm,
//         userLogin: userLogin
//     }
//   }

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)