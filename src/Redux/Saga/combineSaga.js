import { fork, all } from "redux-saga/effects";
import { GET_USERS_REQUEST } from "./getUser";

function* watchAllSaga() {
  {
    yield all([fork(GET_USERS_REQUEST)]);
  }
}

export default watchAllSaga;
