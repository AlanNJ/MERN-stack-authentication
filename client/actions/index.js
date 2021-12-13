import axios from "axios";
import { LOGIN_USER, INITIAL_DATA, LOGOUT_USER } from "./action-types";
export const setUser = (data) => {
	return {
		type: LOGIN_USER,
		payload: data,
	};
};
export const getInitialData = (data) => {
	return {
		type: INITIAL_DATA,
		payload: data,
	};
};
export const logoutUser = () => {
	return {
		type: LOGOUT_USER,
		payload: null,
	};
};
export const loginUser = (dataa) => {
	return (dispatch) => {
		axios
			.post("http://localhost:8000/api/login", {
				dataa,
			})
			.then((res) => {
				console.log(res);
				window.localStorage.setItem("User", JSON.stringify(res.data));
				dispatch(setUser(res.data));
			});
	};
};
export const getInitial = () => {
	return (dispatch) => {
		//console.log("hello");
		//window.localStorage.getItem("login");
		const data = window.localStorage.getItem("User");
		//console.log(JSON.parse(data));
		dispatch(getInitialData(JSON.parse(data)));
	};
};
export const logOut = () => {
	return (dispatch) => {
		dispatch(logoutUser());
	};
};
