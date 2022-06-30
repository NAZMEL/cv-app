import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;