//import Head from "next/head";
import "./index.css";
import Nav from "../components/Nav";
import store from "../store";
import { Provider } from "react-redux";
const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Nav />
			<Component {...pageProps} />
		</Provider>
	);
};
export default MyApp;
