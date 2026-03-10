import { ICategoryRequest } from "../../Interface/ICategoryInterface";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoriesRepositories";

class CreateCategoryService{
    async execute({name, description}: ICategoryRequest){
        if(!name && !description){
            throw new Error("Nome incorreto");
        }

        const categoryRepository = getCustomRepository(CategoryRepositories);
        const categoryAlreadyExists = await categoryRepository.findOne({name});

        if(categoryAlreadyExists){
            throw new Error("Category already exists");
        }

        const category = categoryRepository.create({name, description});
        await categoryRepository.save(category);
    }
}
export {CreateCategoryService};