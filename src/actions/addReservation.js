export const addReservation = (data) => {

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
        .then(reservation => dispatch({type: 'ADD_RESERVATION', payload: reservation})
        )
        .catch(console.log)
    
    }
}