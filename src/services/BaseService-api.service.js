// BaseService.js
import axios from "axios";

export class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: "https://turincon-fast-service.azurewebsites.net/api/v1" // URL base de la API
        });
    }
}
