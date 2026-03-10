import { EntityRepository, Repository } from "typeorm";
import { Packing } from "../entities/packing";

@EntityRepository(Packing)
class PackingRepositories extends Repository<Packing> {

}

export{PackingRepositories};