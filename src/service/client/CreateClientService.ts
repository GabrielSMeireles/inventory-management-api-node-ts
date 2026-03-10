import { IClientRequest } from "../../Interface/IClientInterface";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientsRepositories";

class CreateClientService{
    async execute({name, phone, email, address, neighbor, city, state}: IClientRequest){
        if(!name && !email && !phone && !address && !neighbor && !city && !state){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        const clientRepository = getCustomRepository(ClientRepositories);
        const clientAreadyExists = await clientRepository.findOne({email}); 

        if(clientAreadyExists){
            throw new Error("Client already exists");
        }

        const client= clientRepository.create({
            name,
            phone,
            email,
            address,
            neighbor,
            city,
            state,
        });
        
        return await clientRepository.save(client);
    }
}

export {CreateClientService};