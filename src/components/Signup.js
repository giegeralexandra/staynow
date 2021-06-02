import React from 'react'
import {connect} from 'react-redux'
import {signup} from "../actions/setCurrentUser"
import {updateSignupForm} from '../actions/signupForm'

const Signup = (props) => {

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
        this.props.setState({
            email: "", 
            password: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p><label>Sign Up</label></p>
            <p><input type="text"  name="name" value={props.formData.name} onChange={handleChange} placeholder="Name" /></p>
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

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)