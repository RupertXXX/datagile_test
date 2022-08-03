import countersReducer from './reducers/countersReducer';

import { createStore, combineReducers } from 'redux';

let reducers = combineReducers({
    counters: countersReducer,
});

let store = createStore(reducers);

export default store;

export type RootState = ReturnType<typeof reducers>