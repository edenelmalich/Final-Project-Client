import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/typesActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthLogin: null
};

const authLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.getItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthLogin: true
      };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: false,
        isAuthLogin: false
      };
    default:
      return state;
  }
};
export default authLoginReducer;
