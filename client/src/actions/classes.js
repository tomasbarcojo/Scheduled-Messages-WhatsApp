export const getClasses = (userId, token) => async dispatch => {
    await fetch(`http://localhost:3001/classes/${userId}`, {
        headers: {
            'Content-Type': 'application/json',
            "auth-token": token
        },
    })
        .then((res) => res.json())
        .then(data => {
            if (data.status === 201) {
                dispatch({
                    type: 'GET_CLASSES',
                    payload: data
                })
            }
        }
        )
}

export const newClass = (dataClass, token) => async dispatch => {
    await fetch('http://localhost:3001/classes/createclass', {
        method: 'POST',
        body: JSON.stringify(dataClass),
        headers: {
            'Content-Type': 'application/json',
            "auth-token": token
        },
    })
    .then(data => data.json())
    .then(res => {
        if (res.status === 201) {
            dispatch({
                type: 'ADD_CLASS',
                payload: res.newClass
            })
        }
    })
}