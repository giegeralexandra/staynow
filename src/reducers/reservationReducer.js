export default function reservationReducer(state = {reservations: []}, action){
    console.log('inside reservations reducer')
    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            return action.payload
        case 'ADD_RESERVATION':
            return {...state, reservations: [...state.reservations, action.payload]}
        default:
            return state
    }


}