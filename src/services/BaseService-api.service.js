// BaseService.js
import axios from "axios";

export class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: "https://localhost:7020/api/v1"// URL base de la API
        });
    }
    setAuthorizationHeader(token) {
        this.http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }


    async getAll(endpoint) {
        try {
            const response = await this.http.get(`/${endpoint}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }

    async getUsersByUsername(endpoint, username) {
        try {
            const response = await this.http.get(`/${endpoint}/getbyusername/${username}`);
            console.log("endpoint: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }
}
