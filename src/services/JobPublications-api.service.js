import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class JobPublicationsApiService extends BaseService {
    constructor() {
        super();
    }

    async getAllJobPost() {
        return this.getAll("publications");
    }
}

