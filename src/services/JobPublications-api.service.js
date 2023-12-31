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


    async updatePublications(publications) {
        const publication =
        {
            address: publications.address,
            title: publications.title,
            description: publications.description,
            isPublished: publications.isPublished,
            clientId: publications.client.id,
            image: publications.image
        };
        const id = publications.id;
        return this.update(this.endpoint, id, publication);
    }

    async getAllPublicationsByUser(user) {
        const filterFunction = (jobPost) => jobPost.client.id === user.id;
        return this.getAllDataByUser(user, filterFunction, this.endpoint);
    }

    async createPublication(publicationData) {
        return this.create(this.endpoint, publicationData);
    }

    async updatePublication(publicationData, publicationId  ) {
        return this.update(this.endpoint, publicationId, publicationData);
    }

}

