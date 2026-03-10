import { ISalesRequest } from "../../Interface/ISalesInterface";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

class UpdateSalesService{
    async execute({id, date, description, product, quantity, total, client}: ISalesRequest){
        if(!id && !date && !description && !product && !client && !quantity && !total){
            throw new Error('Preencha todos os campos');
        }

        if(quantity <= 0){
            throw new Error('Quantidade deve ser maior que zero');
        }
    
        if(total <= 0){
            throw new Error('Total deve ser maior que zero');
        }

        const salesRepository = getCustomRepository(SalesRepositories);
        const salesExists = await salesRepository.findOne(id);
        if(!salesExists){
            throw new Error('Venda nao encontrada');
        }


        salesExists.date = date;
        salesExists.description = description;
        salesExists.product = product;
        salesExists.quantity = quantity;
        salesExists.total = total;
        salesExists.client = client;
        return await salesRepository.update(id, salesExists);
    }
}
export {UpdateSalesService}; 