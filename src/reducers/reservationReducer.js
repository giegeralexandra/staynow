export default function reservationReducer(state = {reservations: []}, action){

    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            return {reservations: action.payload}
        case 'ADD_RESERVATION':
            return {...state, reservations: [...state.reservations, action.payload]}
        default:
            return state
    }


}