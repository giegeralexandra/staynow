

export function fetchRentals(action) {

    return action
    // fetch('http://localhost:3000/api/v1/rentals')
    // .then(res => res.json())
    // .then(rentals => console.log(rentals))

}

//this is our action creator which creates an action object 
//this will be dispatched to our reducer
//thunk allows us to connect automatically calling dispacth, it allows us to call dispatch inside of action creator allowing fetch request to finish before dispatching anything to reducer