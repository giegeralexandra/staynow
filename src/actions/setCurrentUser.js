//sync action creators
import {resetLoginForm} from './updateLoginForm'
import {fetchReservations} from './fetchReservations'
import {fetchTrips} from './fetchTrips'
import {resetSignupForm} from './signupForm'

export const setCurrentUser =(user) => {
    console.log('inside fetch current users')
    return {
        
        // fetch('http://localhost:3000/api/v1/users')
        // .then(res => res.json())
        // .then(users => dispatch({
        //     type: 'FETCH_USERS',
        //     payload: users
        // }))
        type: "SET_CURRENT_USER",
        user
    }
}

export function clearCurrentUser() {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asych
export function userLogin(credentials) {
    console.log("credentials ARE", credentials)
    // debugger
    return (dispatch) => {
        console.log('inside fetch post')
        fetch('http://localhost:3000/api/v1/login', {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                // console.log(user)
                dispatch(setCurrentUser(user))
                // dispatch(resetLoginForm())
                dispatch(fetchReservations())
                dispatch(fetchTrips())
                // debugger
            }
        })
        .catch(console.log)
        }
}

//asych
export function getCurrentUser(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            credentials: "include"
        })
        .then(res => res.json())
        .then(user => 
            // {
            // if (user.error) {
            //     alert(user.error)
            // } else {
                // console.log(user)
                dispatch(setCurrentUser(user))
                // debugger
            // }
        )
        .catch(console.log)
        }
    
}




export function logout(event) {
    event.preventDefault()
    console.log('inside logout')
    return (dispatch) => {
        dispatch(clearCurrentUser())
        console.log('inside delete')
        fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}




//asych
export function signup(credentials) {
    console.log("credentials ARE", credentials)
    // debugger
    return (dispatch) => {
        const userInfo = {
            user: credentials
        }
        console.log('inside fetch post signup')
        fetch('http://localhost:3000/api/v1/signup', {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                // console.log(user)
                dispatch(setCurrentUser(user))
                dispatch(resetSignupForm())
                dispatch(fetchReservations())
                dispatch(fetchTrips())
                // debugger
            }
        })
        .catch(console.log)
        }
}