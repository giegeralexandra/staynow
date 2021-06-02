

export function fetchRentals() {
    return (dispatch) => {
        console.log('inside fetch rentals')
        fetch('http://localhost:3000/api/v1/rentals')
        .then(res => res.json())
        .then(rentals => dispatch({
            type: 'FETCH_RENTALS',
            payload: rentals
        }))
    }
}
