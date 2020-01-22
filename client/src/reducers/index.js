import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import testReducer from './testReducer'


export default combineReducers({
    test: testReducer,
    form: formReducer
})