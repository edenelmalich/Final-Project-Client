import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/typesActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  Login: true
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.getItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        Login: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        Login: false
      };
    default:
      return state;
  }
};
export default authReducer;
