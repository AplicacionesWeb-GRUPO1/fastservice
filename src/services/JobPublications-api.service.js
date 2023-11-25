import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class JobPublicationsApiService extends BaseService {
    constructor() {
        super();
        this.endpoint = 'publications'; // Definir el valor del endpoint aquí
    }

    async getAllJobPost() {
        return this.getAll(this.endpoint);
    }

    async getAllPublicationsByUserId(userId) {
        const filterFunction = (jobPost) => jobPost.client.id === userId;
        return this.getAllDataByUserId(userId, filterFunction, this.endpoint);
    }

    async createPublication(publicationData) {
        return this.create(this.endpoint, publicationData);
    }

    async updatePublication(publicationData, publicationId  ) {
        return this.update(this.endpoint, publicationId, publicationData);
    }

}

