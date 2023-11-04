import {BaseService} from "@/services/BaseService-api.service";

export class ClientApiService extends BaseService {
    constructor() {
        super();
    }
    getUsers() {
        return this.http.get("/clients");
    }

}

