// import {withRouter} from 'react-router-dom'
// import {fetchReservations} from './fetchReservations'

export const addReservation = (data) => {
    console.log('inside add reservation')
    console.log(data)
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/reservations', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            credentials: 'include',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(reservation => {
            if (reservation.error) {
                console.log(reservation.error)
                console.log(reservation)
                alert(reservation.error)
            } else {
                // history.push(`/reservations/${reservation.id}`)
                dispatch({type: 'ADD_RESERVATION', payload: reservation})
                
                // dispatch(fetchReservations())
            }
        })
        .catch(console.log)
    
    }
}

