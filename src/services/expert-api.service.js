import {BaseService} from "@/services/BaseService-api.service";

export class ExpertApiService extends BaseService {
    constructor() {
        super();
    }
    getExperts() {
        return this.http.get("/experts");
    }

}

