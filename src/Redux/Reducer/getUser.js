import * as constant from "../constant";
const initialstate = {
  isSuccess: false,
  isRequest: false,
  isError: false,
  isLoading: false,
  result: [],
};

const getUser = (state = initialstate, action) => {
  switch (action.type) {
    case constant.GET_USERS_REQUEST:
      return {
        ...state,
        isSuccess: false,
        isRequest: true,
        isError: false,
        isLoading: true,
      };

    case constant.GET_USERS_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isRequest: false,
        isError: false,
        isLoading: false,
        result: action.payload.response,
      };

    case constant.GET_USERS_ERROR:
      return {
        ...state,
        isSuccess: false,
        isRequest: false,
        isError: true,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getUser;
