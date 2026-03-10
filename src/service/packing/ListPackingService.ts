import { PackingRepositories } from "../../repositories/PackingRepositories";
import { getCustomRepository } from "typeorm";

class ListPackingService {
    async execute() {
       const packingRepository = getCustomRepository(PackingRepositories);

       const packing = await packingRepository.find();
       return packing;
    }
}
export { ListPackingService }