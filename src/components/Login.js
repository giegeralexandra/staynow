import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/updateLoginForm'
import {login}  from '../actions/setCurrentUser'

const Login = (props) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...props.loginForm, 
            [name]: value
        }
        props.updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(props.loginForm)
        // this.props.setState({
        //     email: "", 
        //     password: ""
        // })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  name="email" value={props.loginForm.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="password" value={props.loginForm.password} onChange={handleChange} placeholder="Password" />
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.login
    }
} 
// gives us an argument coming to this component that looks like this: {email: "", password:""}, gives state in form of props


export default connect(mapStateToProps, {updateLoginForm, login})(Login)