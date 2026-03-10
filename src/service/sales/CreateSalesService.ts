import { ISalesRequest } from "../../Interface/ISalesInterface";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

class CreateSalesService{
    async execute({date, description, product, client, quantity, total}: ISalesRequest){
        if(!date && !description && !product && !client && !quantity && !total){
            throw new Error('Preencha todos os campos');
        }

        if(quantity <= 0){
            throw new Error('Quantidade deve ser maior que zero');
        }

        if(total <= 0){
            throw new Error('Total deve ser maior que zero');
        }

        const salesRepository = getCustomRepository(SalesRepositories); 

        const sale = salesRepository.create({date, description, product, client, quantity, total});
        await salesRepository.save(sale);

        return sale;
    
    }
}
export {CreateSalesService};