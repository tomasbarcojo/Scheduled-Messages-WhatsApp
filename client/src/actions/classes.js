export const getClasses = () => async dispatch => {
    await fetch('http://localhost:3001/logout')
    .then(() =>{
        localStorage.clear()
        dispatch({
            type: 'USER_LOGOUT',
        })
    }	
    )
}