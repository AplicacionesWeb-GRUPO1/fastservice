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
    async getByStatus(user, status) {
        const filterByStatus = (contract) => {
            if (user.role === 'client') {
                return contract.state === status && contract.publication.client.id === user.id;
            } else if (user.role === 'expert') {
                return contract.state === status && contract.expert.id === user.id;
            }
            // Maneja otros casos aquí si es necesario
        };

        return this.getAllDataByUser(user, filterByStatus, this.endpoint);
    }

    async getContractsProgress(user) {
        return this.getByStatus(user, 'progress');
    }
    async getContractsRechazado(user) {
        return this.getByStatus(user, 'rechazado');
    }
    async getContractsAceptado(user) {
        return this.getByStatus(user, 'aceptado');
    }
    async getContractsTerminado(user) {
        return this.getByStatus(user, 'terminado');
    }
    async getContractsCancelado(user) {
        return this.getByStatus(user, 'cancelado');
    }

  
}

