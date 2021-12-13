import { LOGIN_USER, INITIAL_DATA, LOGOUT_USER } from "../actions/action-types";
const initialState = {
	user: null,
	login: false,
};
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				user: action.payload,
				login: true,
			};
		case INITIAL_DATA:
			return {
				...state,
				user: action.payload,
				login: true,
			};
		case LOGOUT_USER:
			return {
				...state,
				user: action.payload,
				login: false,
			};
		default:
			return state;
	}
};
export default loginReducer;
