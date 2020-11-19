import { takeLatest, put, call } from "redux-saga/effects";
import {
  getUsersSuccess,
  getUsersError,
} from "../Action/index";
import * as constant from "../constant";
import axios from "axios";

export function* getUser(action) {
  try {
    // let results = action.payload.results;

    let response = yield call(
      axios.get,
      `https://randomuser.me/api/?results=50`
    );
  console.log(response
    ,'HHHHHHHHH')
    if (response.data) {
      yield put(getUsersSuccess({ response: response.data}));
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
