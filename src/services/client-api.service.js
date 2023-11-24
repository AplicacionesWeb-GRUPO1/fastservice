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
            const response = await axios.get('https://aplicacionesweb-grupo1.github.io/API-Fake/jsonserver/jsonserver/db.json');
            return response.data.user_info; // Suponiendo que "clients" es el nombre del arreglo de usuarios en la respuesta
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    }
}

