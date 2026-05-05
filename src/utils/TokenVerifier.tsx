import {jwtDecode} from "jwt-decode";

const isValid = (token: string | null): boolean => {
    if (!token) return false;
    try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    } catch (error) {
        return false;
    }
}

export const isTokenNotValid = (token: string | null): boolean => {
    if(!isValid(token)) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userRole");
        return true;
    } else {
        return false;
    }
}

export const logout = (): boolean => {
    try {        
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userRole");
        return true;
    } catch (error) {
        console.error("Logout failed:", error);
        return false;
    }
}