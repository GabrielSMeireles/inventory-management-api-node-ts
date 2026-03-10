import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/clients";

@EntityRepository(Client)
class ClientRepositories extends Repository<Client> {

}

export{ClientRepositories};