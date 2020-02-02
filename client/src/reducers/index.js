import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from "./authReducer";
import cardSearchReducer from "./cardSearchReducer";
import cardSearchSelectReducer from "./cardSearchSelectReducer";
import decksReducer from "./decksReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  cardSearch: cardSearchReducer,
  decks: decksReducer,
  cardSearchSelect: cardSearchSelectReducer
})