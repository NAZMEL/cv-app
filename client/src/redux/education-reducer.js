import { profileAPI } from "../api/profile-api";

const SET_EDUCATION = "SET_EDUCATION";

let initialState = [
  {
    area: "area",
    place: "place",
    dates: "dates",
  },
];

export const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return [...action.payload];
    default:
      return state;
  }
};

const setEducation = (props) => ({
  type: SET_EDUCATION,
  payload: [...props],
});

export const getEducation = () => (dispatch) => {
  profileAPI.getEducation().then((response) => {
    if (response.status === 200) {
      dispatch(setEducation(response.data));
    }
  });
};

export default educationReducer;
