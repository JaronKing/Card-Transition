import { combineReducers } from 'redux';
import ContactReducer from '../reducers/ContactReducer';

const rootReducer = combineReducers({
    contact: ContactReducer
});

export default rootReducer;
