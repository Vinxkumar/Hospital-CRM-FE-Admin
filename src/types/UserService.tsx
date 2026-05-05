import type{ UserInfo } from "./UserInfo";

export const getUserInfo = (): UserInfo | null => {
    
        return JSON.parse(localStorage.getItem("userInfo") || "null") as UserInfo | null;

}

export const setUserInfo = (userInfo: UserInfo) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

export const clearUserInfo = () => {
    localStorage.removeItem("userInfo");
    // localStorage.removeItem("token");
}