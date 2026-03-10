import { IProductsRequest } from "../../Interface/IProductsInterface";
import { ProductRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";

class CreateProductsService{
    async execute({name, category, description, price}: IProductsRequest){
        if(!name && !category && !description && !price){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if(price <= 0){
            throw new Error("Preço deve ser maior que zero");
        }

        const productRepository = getCustomRepository(ProductRepositories);
        const productAlreadyExists = await productRepository.findOne({name});
        if(productAlreadyExists){
            throw new Error("Product already exists");
        }
        const product = productRepository.create({name, category, description, price});
        await productRepository.save(product);
        
        return product;

    }
}
export {CreateProductsService};