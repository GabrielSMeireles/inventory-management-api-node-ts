import { getCustomRepository } from "typeorm"
import { CategoryRepositories } from "../../repositories/CategoriesRepositories";

class ListCategoryService {
    async execute() {
        const categoriesRepository = getCustomRepository(CategoryRepositories);
        const categories = await categoriesRepository.find();
        
        return categories;
    }
}
export { ListCategoryService }