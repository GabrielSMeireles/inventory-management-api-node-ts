import { IClientRequest } from "../../Interface/IClientInterface";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientsRepositories";

class DeleteClientService{
    async execute(id: string){
        const clientRepository = getCustomRepository(ClientRepositories);
        const client = await clientRepository.findOne(id);
        if(!client){
            throw new Error("Client not found");
        }
        await clientRepository.remove(client);
        return {message : "Client with id " + id + " was deleted"}
    }
}
export {DeleteClientService}; 