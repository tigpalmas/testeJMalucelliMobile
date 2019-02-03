import {combineReducers} from 'redux';

import form_reducer from './fom_reducer';


export default combineReducers({
    form: form_reducer,

});