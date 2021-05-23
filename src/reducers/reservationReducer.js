export default function reservationReducer(state = {reservations: []}, action){

    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            return {reservations: action.payload}
        default:
            return state
    }


}