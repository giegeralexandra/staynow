export function fetchTrips() {
    return (dispatch) => {
        console.log('inside fetch trips')
        fetch('http://localhost:3000/api/v1/trips')
        .then(res => res.json())
        .then(trips => dispatch({
            type: 'FETCH_TRIPS',
            payload: trips
        }))
    }
}