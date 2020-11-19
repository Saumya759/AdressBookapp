import { combineReducers } from "redux";
import getUser from "./getUser";

const rootReducer = combineReducers({ getUserstatus: getUser });

export default rootReducer;
