import { PackingRepositories } from "../../repositories/PackingRepositories";
import { getCustomRepository } from "typeorm";

class DeletePackingService{
    async execute(id: string){
        const packingRepository = getCustomRepository(PackingRepositories);
        const packing = await packingRepository.findOne(id);
        if(!packing){
            throw new Error('Venda nao encontrada');
        }
        await packingRepository.remove(packing);
        return {message : "Venda excluida com sucesso"}
    }
}
export {DeletePackingService}; 