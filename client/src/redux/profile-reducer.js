import { profileAPI } from "../api/profile-api";

const SET_PROFILE = "SET_PROFILE";

let initialState = {
  fullName: "",
  position: "",
  email: "",
  phone: "",
  telegram: "",
  facebook: "",
  linkedIn: "",
  motivationLetter: "",
  languages: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const setProfile = (props) => ({
  type: SET_PROFILE,
  payload: { ...props },
});

export const getProfile = () => (dispatch) => {
  profileAPI.getMainInfo().then((response) => {
    if (response.status === 200) {
      dispatch(setProfile(response.data));
    }
  });
};

export default profileReducer;
