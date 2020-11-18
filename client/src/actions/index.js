export const userLogin = (input, history) => async dispatch => {
    await fetch(`http://localhost:3001/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.error && response.message === 'usuario o password no valido') {
                swal("Ups!", "Error en el inicio de sesion", "error")
            }
            else if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.user))
                dispatch({
                    type: 'USER_LOGGED',
                    payload: response.user,
                })
                swal("Usuario logueado con exito", "", "success")
                history.push('/')
            }
        })
        .catch((error) => {
            return { error: true, message: 'Error en login, intente otra vez' }
        })
}

export const addUser = (user) => async dispatch => {
	try {
		await fetch('http://localhost:3001/user', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(user),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === 400) {
					swal("Ups!", "El email ya esta siendo utilizado", "error")
				} else if (res.status === 201) {
					localStorage.setItem('user_sign', JSON.stringify(res.user))
					dispatch({
						type: 'ADD_USER',
						payload: res.user,
					})
					swal("Usuario creado con exito", "", "success")
				}
			})
			.catch((error) => { console.log(error) })
	} catch (err) {
		console.log(err)
	}
}

export const resetPassword = (userId) => async dispatch => {
    await fetch(`http://localhost:3001/user/${userId}/passwordReset`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) =>
            dispatch({
                type: 'RESET_PASSWORD',
                payload: data,
            })
        )
}

export const resetPassword = (userId) => async dispatch => {
    await fetch(`http://localhost:3001/user/${userId}/passwordReset`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) =>
            dispatch({
                type: 'RESET_PASSWORD',
                payload: data,
            })
        )
}

export const userLogout = () => async dispatch => {
    await fetch('http://localhost:3001/logout', {
        credentials: 'include',
    }).then(() =>{
        localStorage.clear()
        dispatch({
            type: 'USER_LOGOUT',
        })
    }	
    )
}