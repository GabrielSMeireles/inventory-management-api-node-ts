import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

class DeleteSalesService{
    async execute(id: string){
        const salesRepository = getCustomRepository(SalesRepositories);
        const sales = await salesRepository.findOne(id);
        if(!sales){
            throw new Error('Venda nao encontrada');
        }
        await salesRepository.remove(sales);
        return {message : "Venda excluida com sucesso"}
    }
}
export {DeleteSalesService}; 