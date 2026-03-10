import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/products";

@EntityRepository(Product)
class ProductRepositories extends Repository<Product> {

}

export{ProductRepositories};