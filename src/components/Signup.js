import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/updateLoginForm'
import {userLogin} from '../actions/setCurrentUser'

const Signup = (props) => {

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
        props.userLogin(props.loginForm)
        // this.props.setState({
        //     email: "", 
        //     password: ""
        // })
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/><p><input type="text"  name="email" value={props.loginForm.email} onChange={handleChange} placeholder="Email" /></p><br/>
            <p><input type="text" name="password" value={props.loginForm.password} onChange={handleChange} placeholder="Password" /></p><br/>
            <p><input type="submit" value="Login"/></p>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.login
    }
} 

const mapDispatchToProps = () => {
    return {
        updateLoginForm: updateLoginForm,
        userLogin: userLogin
    }
  }

export default connect(mapStateToProps, {userLogin, updateLoginForm})(Login)