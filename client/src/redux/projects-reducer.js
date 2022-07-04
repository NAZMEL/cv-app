import { profileAPI } from "../api/profile-api";

const SET_PROJECTS = "SET_PROJECTS";

let initialState = [
  {
    name: "",
    link: "",
  },
];

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return [...action.payload];
    default:
      return state;
  }
};

const setProjects = (props) => ({
  type: SET_PROJECTS,
  payload: [...props],
});

export const getProjects = () => (dispatch) => {
  profileAPI.getProjects().then((response) => {
    if (response.status === 200) {
      dispatch(setProjects(response.data));
    }
  });
};

export default experienceReducer;
