import {BaseService} from "@/services/BaseService-api.service";
import axios from 'axios';

export class ContractServiceApiService extends BaseService {
    constructor() {
        super();
        this.endpoint = 'contract'; // Definir el valor del endpoint aquí
    }

    async getAllContract() {
        return this.getAll(this.endpoint);
    }

    async getByStatus(userId,status) {
        const filterByStatus = (contract) =>
            ((contract.state === status)&& (contract.publication.client.id === userId));
        return this.getAllDataByUserId(userId, filterByStatus, this.endpoint);
    }


    async getContractsProgress(userId) {
        return this.getByStatus(userId, 'progress');
    }
    async getContractsRechazado(userId) {
        return this.getByStatus(userId, 'rechazado');
    }
    async getContractsAceptado(userId) {
        return this.getByStatus(userId, 'aceptado');
    }
    async getContractsTerminado(userId) {
        return this.getByStatus(userId, 'terminado');
    }
    async getContractsCancelado(userId) {
        return this.getByStatus(userId, 'cancelado');
    }
}

