import { EntityRepository, Repository } from "typeorm";
import { Sales } from "../entities/sales";

@EntityRepository(Sales)
class SalesRepositories extends Repository<Sales> {

}

export{SalesRepositories};