let initialState = {
    reservations: []
}

export default function reservationReducer(state = initialState, action){
    console.log('inside reservations reducer')
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'FETCH_RESERVATIONS':
            return action.payload
        case 'ADD_RESERVATION':
            return state.concat(action.payload)
        default:
            return state
    }


}