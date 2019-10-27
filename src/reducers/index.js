import { combineReducers } from 'redux';
import notiReducer from '../reducers/notiReducer';
import accountReducer from '../reducers/accountReducer';
import listReducer from '../reducers/listReducer';
import alertReducer from '../reducers/alertReducer';
import authReducer from './authReducer';
import authLoginReducer from './authLoginReducer';
import DisconnectReducer from './DisconnectReducer';
import updateReducer from './updateReducer';

export default combineReducers({
  notiReducer,
  accountReducer,
  listReducer,
  alertReducer,
  authReducer,
  authLoginReducer,
  DisconnectReducer,
  updateReducer
});
