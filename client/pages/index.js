import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getInitial } from "../actions";
import RegisterUser from "../components/RegisterUser";
import { useRouter } from "next/router";

const index = (props) => {
	const router = useRouter();
	useEffect(() => {
		props.getInitial();
		if (props.user && props.user.user === null) router.push("/login");
	}, [props.user && props.user.user && props.user.user.login]);
	return <div>hello</div>;
};
const mapStateToProps = (state) => {
	return {
		user: state.allUsers,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getInitial: (data) => {
			dispatch(getInitial(data));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
