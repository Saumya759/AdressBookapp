import { takeLatest, put, call } from "redux-saga/effects";
import { getUsersSuccess, getUsersError } from "../Action/index";
import * as constant from "../constant";
import axios from "axios";

export function* getUser(action) {
  try {
    let response = yield call(
      axios.get,
      `https://randomuser.me/api/?results=1000`
    );
   
    if (response.data) {
      yield put(getUsersSuccess({ response: response.data }));
    } else {
      yield put(getUsersError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(getUsersError({ error: "Invalid details" }));
  }
}

export function* GET_USERS_REQUEST() {
  yield takeLatest(constant.GET_USERS_REQUEST, getUser);
}
