import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import educationReducer from "./education-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  educationPage: educationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
