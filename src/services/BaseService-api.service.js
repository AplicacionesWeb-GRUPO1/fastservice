// BaseService.js
import axios from "axios";

export class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: "https://turincon-fast-service.azurewebsites.net/api/v1"// URL base de la API
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

    async Create(endpoint, data) {
        try {
            const response = await this.http.post(`/${endpoint}`, data);
            return response.data;
        } catch (error) {
            throw new Error(`Error creating data: ${error}`);
        }
    }

    async update(endpoint, itemId, newData) {
        try {
            const response = await this.http.put(`/${endpoint}/${itemId}`, newData);
            return response.data;
        } catch (error) {
            throw new Error(`Error updating data: ${error}`);
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

    async getAllDataByUser(user, filterFunction, endpoint) {
        const allItems = await this.getAll(endpoint);
        return allItems.filter(filterFunction);
    }

}
