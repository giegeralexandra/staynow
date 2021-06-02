import {resetLoginForm} from './updateLoginForm'
import {fetchReservations} from './fetchReservations'
import {fetchTrips} from './fetchTrips'
import {resetSignupForm} from './signupForm'

export const setCurrentUser =(user) => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export function clearCurrentUser() {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export function userLogin(credentials) {
    console.log("credentials ARE", credentials)
    return (dispatch) => {
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
                dispatch(setCurrentUser(user))
                dispatch(fetchReservations())
                dispatch(fetchTrips())
            }
        })
        .catch(console.log)
        }
}

export function getCurrentUser(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            credentials: "include"
        })
        .then(res => res.json())
        .then(user => 
                dispatch(setCurrentUser(user))

        )
        .catch(console.log)
        }
    
}




export function logout(event) {
    event.preventDefault()
    return (dispatch) => {
        dispatch(clearCurrentUser())
        fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}




export function signup(credentials) {
    console.log("credentials ARE", credentials)
    return (dispatch) => {
        const userInfo = {
            user: credentials
        }
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
                dispatch(setCurrentUser(user))
                dispatch(resetSignupForm())
                dispatch(fetchReservations())
                dispatch(fetchTrips())
            }
        })
        .catch(console.log)
        }
}