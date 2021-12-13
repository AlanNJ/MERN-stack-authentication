import { combineReducers } from "redux";
import loginReducer from "./userReducer";
const rootReducer = combineReducers({
	allUsers: loginReducer,
});
export default rootReducer;
