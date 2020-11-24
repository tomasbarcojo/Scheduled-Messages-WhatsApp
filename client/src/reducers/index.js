const initialstate = {
	user: {},
    classes: [],
	userLogged: false
}

export default function rootReducer(state = initialstate, action) {
	switch (action.type) {
			// USER
			
		case 'LOGIN_USER':
			return {
				...state,
				user: action.payload,
				userLogged: true,
            }

		case 'ADD_USER':
			return {
				...state,
				user: action.payload
            }
            
		case 'RESET_PASSWORD':
			return {
				...state,
				users: action.payload,
            }
            
		case 'USER_LOGOUT':
			return {
				...state,
				user: {},
				classes: {},
				userLogged: false,
			}
			
			// CLASSES

		case 'GET_CLASSES':
			return {
				...state,
				classes: action.payload,
				userLogged: true,
			}
		default:
			return state
	}
}