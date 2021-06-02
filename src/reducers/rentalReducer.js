
export default function rentalReducer(state = {rentals: []}, action){
    console.log('inside rental reducer')
    switch (action.type) {
        case 'FETCH_RENTALS':
            return action.payload
        case 'ADD_RENTAL':
            return {...state, rentals: [...state.rentals, action.payload]}
        default:
            return state
    }


}
