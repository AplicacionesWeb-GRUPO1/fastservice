import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class ClientApiService extends BaseService {
    constructor() {
        super();
    }

    async getAllClients() {
        return this.getAll("clients");
    }
}

