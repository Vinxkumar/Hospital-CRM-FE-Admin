import api from "../Axios/Api";
import type { Login } from "../types/signIn";


const loginHandler = async (loginData: Login) => {
    console.log("Login handler called");
    const msg = api.post("/auth/login", loginData);
    try {
        const response = await msg;
        console.log("Login successful:");
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("userEmail", response.data.userEmail);
        localStorage.setItem("userPhone", response.data.userPhone);
        localStorage.setItem("userRole", response.data.userRole);
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

export default loginHandler;