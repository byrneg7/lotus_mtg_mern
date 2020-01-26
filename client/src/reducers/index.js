import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from "./authReducer";
import cardSearchReducer from "./cardSearchReducer";


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    cardSearch: cardSearchReducer
})