import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class ClientApiService extends BaseService {
    constructor() {
        super();
        this.endpoint = 'clients'; // Definir el valor del endpoint aquí
    }

    async getAllClients() {
        return this.getAll(this.endpoint);
    }
}

