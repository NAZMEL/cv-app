import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import educationReducer from "./education-reducer";
import profileReducer from "./profile-reducer";
import experienceReducer from "./experience-reducer";
import projectsReducer from "./projects-reducer";
import technologiesReducer from "./technologies-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  educationPage: educationReducer,
  experiencePage: experienceReducer,
  projectsPage: projectsReducer,
  technologiesPage: technologiesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
