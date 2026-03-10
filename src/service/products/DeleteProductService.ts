import { IProductsRequest } from "../../Interface/IProductsInterface";
import { ProductRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";

class DeleteProductsService{
    async execute(id: string){
        const productRepository = getCustomRepository(ProductRepositories);
        const product = await productRepository.findOne(id);
        if(!product){
            throw new Error("Product not found");
        }
        await productRepository.remove(product);

        return {message : "Product with id " + id + " was deleted"}
    }
}
export {DeleteProductsService}; 