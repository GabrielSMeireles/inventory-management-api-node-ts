import { ProductRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";

class ListProductsService {
    async execute() {
       const productRepositories = getCustomRepository(ProductRepositories);

       const products = await productRepositories.find();
       return products;
    }
}

export { ListProductsService }