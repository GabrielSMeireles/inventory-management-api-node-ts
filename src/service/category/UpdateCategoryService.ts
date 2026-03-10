import { ICategoryRequest } from "../../Interface/ICategoryInterface";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoriesRepositories";

class UpdateCategoryService{
    async execute({id, name}: ICategoryRequest){
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const categoryExists = await categoryRepository.findOne(id);
        if(!categoryExists){
            throw new Error("Category not found");
        }

        categoryExists.name = name;
        return await categoryRepository.update(id, categoryExists);
    }
}
export {UpdateCategoryService}; 