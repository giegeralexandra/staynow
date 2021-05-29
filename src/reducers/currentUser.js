export default function currentUserReducer(state = null, action) {
    console.log('inside current user reducer')
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user
        case 'CLEAR_CURRENT_USER':
            return null
        default:
            return state
    }
    // debugger
}