import { combineReducers } from 'redux';
import CardReducer from '../reducers/CardReducer';

const rootReducer = combineReducers({
    card: CardReducer
});

export default rootReducer;
