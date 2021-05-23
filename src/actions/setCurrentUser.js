//sync action creators

export function setCurrentUser() {
    return {
        // console.log('inside fetch current users')
        
        // fetch('http://localhost:3000/api/v1/users')
        // .then(res => res.json())
        // .then(users => dispatch({
        //     type: 'FETCH_USERS',
        //     payload: users
        // }))
        type: "SET_CURRENT_USER"
    }
}

//asych
export const login = credentials => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login',{
            method: "POST",
            
        })

    }
}