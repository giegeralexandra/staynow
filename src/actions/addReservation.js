export const addReservation = (data) => {
    console.log('inside add reservation')
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/reservations', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(reservation => {
            if (reservation.error) {
                console.log(reservation.error)
                console.log(reservation)
                alert(reservation.error)
            } else {
                dispatch({type: 'ADD_RESERVATION', payload: reservation})
            }
        })
        .catch(console.log)
    
    }
}