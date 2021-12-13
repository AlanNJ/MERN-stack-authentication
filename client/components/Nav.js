import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { logOut } from "../actions";

const Nav = (props) => {
	const logoutUser = (e) => {
		window.localStorage.removeItem("User");
	};

	return (
		<div className="nav-container">
			{props.user && props.user.user ? (
				<>
					<Link href="/">
						<a>Home</a>
					</Link>
					{props.user && props.user.user && props.user.user.user && (
						<Link href="/dashboard">
							<a>{props.user.user.user.name}</a>
						</Link>
					)}
					<Link href="/login">
						<a onClick={logoutUser}>Logout</a>
					</Link>
				</>
			) : (
				<>
					<Link href="/register">
						<a>Register</a>
					</Link>

					<Link href="/login">
						<a>Login</a>
					</Link>
				</>
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => {
			dispatch(logOut());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
