//reducer is a place that defines action types - takes in previous state, action type, all it really is is a function 

export default function rentalReducer(state = {rentals: []}, action){

    switch (action.type) {
        case 'FETCH_RENTALS':
            return {rentals: [action.payload]}
        case 'ADD_ACCOUNT':
            return {...state, rentals: [...state.rentals, action.payload]}
        default:
            return state
    }


}
