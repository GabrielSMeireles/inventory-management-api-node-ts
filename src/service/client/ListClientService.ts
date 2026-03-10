import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientsRepositories";

class ListClientService {
    async execute() {
        const clientRepositories = getCustomRepository(ClientRepositories);

        const clients = await clientRepositories.find();
        
        return clients;
    }
}

export { ListClientService }