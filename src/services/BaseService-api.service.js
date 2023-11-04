// BaseService.js
import axios from "axios";

export class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: "https://fastserviceapi20231103222242.azurewebsites.net/api/v1" // URL base de la API
        });
    }
}
