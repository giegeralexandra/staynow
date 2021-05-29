export default function reservationReducer(state = {reservations: []}, action){
    console.log('inside reservations reducer')
    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            return action.payload
        case 'ADD_RESERVATION':
            return state.concat(action.reservation)
        default:
            return state
    }


}