export const setTrips = trips => {
    return {
        type: "SET_TRIPS",
        trips
    }
}

export function fetchTrips() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/trips', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(trips => dispatch({
            type: 'FETCH_TRIPS',
            payload: trips
        }))
    }
}