import {BaseService} from "@/services/BaseService-api.service";
import axios from "axios";

export class ExpertApiService extends BaseService {
    constructor() {
        super();
    }

    async getUsers() {
        try {
            const response = await this.http.get('/experts');
            return response.data.user_info; // Suponiendo que "clients" es el nombre del arreglo de usuarios en la respuesta
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }

}

