import { profileAPI } from "../api/profile-api";

const SET_PROFILE = "SET_PROFILE";

let initialState = {
  fullName: "fjdk",
  position: "position",
  email: "email",
  phone: "phone",
  telegram: "telegram",
  linkedIn: "linkedIn",
  languages: {
    Ukrainian: "Ukrainian",
  },
};

export const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case SET_PROFILE:
      return { ...state, ...action.payload };
    default:
      return stateCopy;
  }
};

const setProfile = (
  fullName,
  position,
  email,
  phone,
  telegram,
  linkedIn,
  ...languages
) => ({
  type: SET_PROFILE,
  payload: {
    fullName,
    position,
    email,
    phone,
    telegram,
    linkedIn,
    ...languages,
  },
});

export const getProfile = () => async (dispatch) => {
  let data = await profileAPI.getMainInfo();
  if(data.resulCode === 0){
    dispatch(setProfile({...data.data, ...data.data.languages}));
  }
};

export default profileReducer;
