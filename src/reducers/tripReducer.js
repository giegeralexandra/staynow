export default function tripReducer(state = {trips: []}, action){

    switch (action.type) {
        case 'FETCH_TRIPS':
            return action.payload
        // case 'ADD_USER':
        //     return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}