export const getClasses = (userId) => async dispatch => {
    await fetch(`http://localhost:3001/classes/${userId}`)
    .then((res) => res.json())
    .then(data => {
        dispatch({
            type: 'GET_CLASSES',
            payload: data
        })
    }	
    )
}

export const newClass = () => async dispatch => {
    await fetch('http://localhost:3001/classes/createclass')
}