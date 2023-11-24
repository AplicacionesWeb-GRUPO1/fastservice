import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class ClientApiService extends BaseService {
    constructor() {
        super();
    }
    //getUsers() {
    //    return this.http.get("/clients");
    //}

    async getUsers() {
        try {
            const response = await this.http.get('/clients/{}');
            return response.data.user_info; // Suponiendo que "clients" es el nombre del arreglo de usuarios en la respuesta
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }
}

