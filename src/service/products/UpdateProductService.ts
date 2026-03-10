import { IProductsRequest } from "../../Interface/IProductsInterface";
import { ProductRepositories } from "../../repositories/ProductsRepositories";
import { getCustomRepository } from "typeorm";

class UpdateProductsService{
    async execute({id, name, category, description, price}: IProductsRequest){
        if(!id && !name && !category && !description && !price){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if(price <= 0){
            throw new Error("Preço deve ser maior que zero");
        }

        const productRepository = getCustomRepository(ProductRepositories);
        const productExists = await productRepository.findOne(id);
        if(!productExists){
            throw new Error("Product not found");
        }

        productExists.name = name;
        productExists.category = category;
        productExists.description = description;
        productExists.price = price;
        return await productRepository.update(id, productExists);
    }
}
export {UpdateProductsService}; 