import Swal from 'sweetalert2';

export const userLogin = (data, history) => async dispatch => {
    await fetch(`http://localhost:3001/user/login`, {
        method: 'POST',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.status === 401) {
                Swal.fire("Email or password are invalid", "", "error")
            }
            else if (response.status === 200) {
                // localStorage.setItem('user', JSON.stringify(response.user))
                dispatch({
                    type: 'LOGIN_USER',
                    payload: response.user,
                })
                // Swal.fire("You are logged in!", "", "success")
                history.push('/dashboard')
            }
        })
        .catch((error) => {
            return { error: true, message: 'Error en login, intente otra vez' }
        })
}

export const addUser = (user, history) => async dispatch => {
	try {
		await fetch('http://localhost:3001/user/createuser', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === 400) {
					Swal.fire("User already exist", "", "error")
				} else if (res.status === 201) {
					localStorage.setItem('user_sign', JSON.stringify(res.newUser))
					dispatch({
						type: 'ADD_USER',
						payload: res.newUser,
					})
                    Swal.fire("Usuario creado con exito", "", "success")
                    history.push('/')
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

export const userLogout = () => async dispatch => {
    await fetch('http://localhost:3001/user/logout')
    .then(() =>{
        // localStorage.clear()
        dispatch({
            type: 'USER_LOGOUT',
        })
    }	
    )
}