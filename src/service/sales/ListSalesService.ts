import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

class ListSalesService {
    async execute() {
       const salesRepository = getCustomRepository(SalesRepositories);

       const sales = await salesRepository.find();
       return sales;
    }
}
export { ListSalesService }