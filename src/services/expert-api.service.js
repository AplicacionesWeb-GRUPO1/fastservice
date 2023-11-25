import {BaseService} from "@/services/BaseService-api.service";
import axios from "axios";

export class ExpertApiService extends BaseService {
    constructor() {
        super();
        this.endpoint = 'experts'; // Definir el valor del endpoint aquí

    }
    async getAllExperts() {
        return this.getAll(this.endpoint);
    }
}

