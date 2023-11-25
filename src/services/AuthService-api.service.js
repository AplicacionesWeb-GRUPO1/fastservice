import {BaseService} from "@/services/BaseService-api.service";
import axios from "axios";


export class AuthServiceApiService extends BaseService {
    constructor() {
        super();
    }

    async getToken(credentials) {
        try {
            return this.http.post("/users/sign-in", credentials);
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }

    createUser(userData) {
        return this.http.post("/users/sign-up", userData);
    }

    async getJobPostsForCurrentUser(userId) {
        const allJobPosts = await this.getAllJobPost();
        return allJobPosts.filter((jobPost) => jobPost.client.id === userId);
    }

    isLoggedIn() {
        const token = localStorage.getItem('token');
        return !!token; // Devuelve true si el token existe, lo que indica que el usuario ha iniciado sesión
    }
}

