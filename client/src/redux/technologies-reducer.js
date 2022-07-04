import { profileAPI } from "../api/profile-api";

const SET_TECHNOLOGIES = "SET_TECHNOLOGIES";

let initialState = [
  {
    languages: [],
    mainLibraries: [],
    technologies: [],
    databases: [],
  },
];

export const technologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TECHNOLOGIES:
      return [...action.payload];
    default:
      return state;
  }
};

const setTechnologies = (props) => ({
  type: SET_TECHNOLOGIES,
  payload: [...props],
});

export const getTechnologies = () => (dispatch) => {
  profileAPI.getTechnologies().then((response) => {
    if (response.status === 200) {
      dispatch(setTechnologies(response.data));
    }
  });
};

export default technologiesReducer;
