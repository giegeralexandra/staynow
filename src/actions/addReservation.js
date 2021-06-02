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
                alert(reservation.error)
            } else {
                dispatch({type: 'ADD_RESERVATION', payload: reservation})
            }
        })
        .catch(console.log)
    
    }
}

