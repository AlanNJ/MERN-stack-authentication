import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getInitial } from "../actions";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useRouter } from "next/router";
import renderHtml from "react-render-html";

const dashboard = (props) => {
	const [content, setContent] = useState("");

	const router = useRouter();

	const pos = [];
	useEffect(() => {
		props.getInitial();
	}, []);

	return <div>{props.user.user && props.user.user.name}</div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
