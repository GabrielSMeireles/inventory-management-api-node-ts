import { IClientRequest } from "../../Interface/IClientInterface";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientsRepositories";

class UpdateClientService{
    async execute({id, name, phone, email, address, neighbor, city, state }: IClientRequest){
        if(!id && !name && !email){
            throw new Error("Nome e Email devem ser preenchidos");
        }
        
        const clientRepository = getCustomRepository(ClientRepositories);
        const clientExists = await clientRepository.findOne(id);
        if(!clientExists){
            throw new Error("Client not found");
        }

        clientExists.name = name;
        clientExists.phone = phone;
        clientExists.email = email;
        clientExists.address = address;
        clientExists.neighbor = neighbor;
        clientExists.city = city;
        clientExists.state = state;
        return await clientRepository.update(id, clientExists);
        
    }
}
export {UpdateClientService}; 