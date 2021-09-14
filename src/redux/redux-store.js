import {combineReducers, createStore} from 'redux';
import dealsReducer from './deals-reducer'


let reducers = combineReducers({
    deals: dealsReducer
});

let store = createStore(reducers);

export default store;