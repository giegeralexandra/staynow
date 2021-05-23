//sync action creators

export const setCurrentUser =(user) => {
    return {
        // console.log('inside fetch current users')
        
        // fetch('http://localhost:3000/api/v1/users')
        // .then(res => res.json())
        // .then(users => dispatch({
        //     type: 'FETCH_USERS',
        //     payload: users
        // }))
        type: "SET_CURRENT_USER",
        user
    }
}

//asych
export const login = (credentials) => {
    console.log("credentials are", credentials)
    return dispatch => {
        console.log('insidefetchlogin')
        return fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }
    
}