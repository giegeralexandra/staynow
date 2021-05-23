export const addRental = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/rentals', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(rental => dispatch({type: 'ADD_RENTAL', payload: rental})
        )
    
    }
}