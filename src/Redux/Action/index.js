import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getUsersRequest = createAction(constant.GET_USERS_REQUEST);
export const getUsersSuccess = createAction(constant.GET_USERS_SUCCESS);
export const getUsersError = createAction(constant.GET_USERS_ERROR);
