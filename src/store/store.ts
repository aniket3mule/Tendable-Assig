import { createStore } from 'redux';
import { counterReducer } from './reducer';

// Create the store using configureStore
const store = createStore(counterReducer)

export default store;