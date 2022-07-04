import instance from "./api";

export const profileAPI = {
  getMainInfo() {
    return instance.get("profile").then((response) => response);
  },
  getEducation(){
    return instance.get("education").then((response) => response);
  },
  getExperience(){
    return instance.get("experience").then(response => response);
  },
  
};
