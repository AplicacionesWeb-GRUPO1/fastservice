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

    async createContract(contractData) {
        return this.create(this.endpoint, contractData);
    }

    async updateContract(contractData) {
        console.log("solicitud put", this.http);
        return this.update(this.endpoint, contractData.id, contractData);
    }

    async updateState(contractData, state) {
        console.log("solicitud put", this.http);
        const contract = {
            publicationId: contractData.publication.id,
            expertId: contractData.expert.id,
            price: contractData.price,
            state: state,
            date: contractData.date
        };
        return this.update(this.endpoint, contractData.id, contract);
    }

    async changeToInProgress(contractData ) {
        return this.updateState(contractData,'progress');
    }

    async changeToAceptado(contractData, ) {
        return this.updateState(contractData, 'aceptado');
    }

    async changeToRechazado(contractData, ) {
        return this.updateState(contractData, 'rechazado');
    }

    async changeToTerminado(contractData, ) {
        return this.updateState(contractData, 'terminado');
    }

    async changeToCancelado(contractData, ) {
        return this.updateState(contractData, 'cancelado');
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

