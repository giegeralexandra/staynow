export const setReservations = reservations => {
    return {
        type: "SET_RESERVATIONS",
        reservations
    }
}

export function fetchReservations() {
    return (dispatch) => {
        console.log('inside fetch reservations')
        fetch('http://localhost:3000/api/v1/reservations', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(reservations => dispatch({
            type: 'FETCH_RESERVATIONS',
            payload: reservations
        }))
    }
}