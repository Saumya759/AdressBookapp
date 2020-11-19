import * as constant from "../constant";
const initialstate = {
  isSuccess: false,
  isRequest: false,
  isError: false,
  result: [],
};

const getUser = (state = initialstate, action) => {
  // console.log("SSS", action.payload);
  switch (action.type) {
    case constant.GET_USERS_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isRequest: true,
        isError: false,
      };

    case constant.GET_USERS_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isRequest: false,
        isError: false,
        result: action.payload.response,
      };

    case constant.GET_USERS_ERROR:
      return {
        ...state,
        isSuccess: false,
        isRequest: false,
        isError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getUser;
