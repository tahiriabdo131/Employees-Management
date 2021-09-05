import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/combineReducers';
//thunk => midel de redux pour reagir avec l'exterieur
import thunk from "redux-thunk"

// for this we'll use Redux "compose" function
const enhancers = compose(
    applyMiddleware(thunk), // your own middleware
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
); // devtools middleware

export let store = createStore(rootReducer, enhancers);