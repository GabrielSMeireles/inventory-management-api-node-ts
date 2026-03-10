import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/categories";

@EntityRepository(Category)
class CategoryRepositories extends Repository<Category> {

}

export{CategoryRepositories};