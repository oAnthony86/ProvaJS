import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "login", {
                email: email,
                password: password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(name: string, email: string, password: string) {
        return axios.post(API_URL + "register", {
            name: name,
            email: email,
            password: password
        }).then(response => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();
