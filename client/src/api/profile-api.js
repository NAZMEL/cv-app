import instance from "./api";

export const profileAPI = {
    getMainInfo(){
        return instance.get('profile').then(response => response.data);
    },
}