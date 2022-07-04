import { profileAPI } from "../api/profile-api";

const SET_EXPERIENCE = "SET_EXPERIENCE";

let initialState = [
  {
    job: "",
    position: "",
    responsibilities: [],
    workingPeriod: "",
  },
];

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCE:
      return [...action.payload];
    default:
      return state;
  }
};

const setExperience = (props) => ({
  type: SET_EXPERIENCE,
  payload: [...props],
});

export const getExperience = () => (dispatch) => {
  profileAPI.getExperience().then((response) => {
    if (response.status === 200) {
      dispatch(setExperience(response.data));
    }
  });
};

export default experienceReducer;
