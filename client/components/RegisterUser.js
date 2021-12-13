import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterUser = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	console.log(name);
	const handleClick = async (e) => {
		e.preventDefault();
		const { data } = await axios.post("http://localhost:8000/api/register", {
			name,
			email,
			password,
			phone,
		});
		if (data) {
			router.push("/login");
		}
	};

	return (
		<div className="reg-container">
			<input
				type="text"
				placeholder="name"
				className="input"
				onChange={(e) => setName(e.target.value)}
			/>
			name
			<input
				type="text"
				placeholder="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			email
			<input
				type="text"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			password
			<input
				type="number"
				placeholder="phone no."
				onChange={(e) => setPhone(e.target.value)}
			/>
			phone
			<button type="submit" onClick={(e) => handleClick(e)}>
				Submit
			</button>
		</div>
	);
};
export default RegisterUser;
