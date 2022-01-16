import React from "react";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import { useRouter } from "next/router";

const login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const data = { email, password };
	const router = useRouter();
	const loginUser = async (e) => {
		props.getUser(data);
	};
	if (props.user.user) router.push("/");

	return (
		<div>
			<input
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="email"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit" onClick={(e) => loginUser(e)}>
				Login
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (data) => {
			dispatch(loginUser(data));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(login);
