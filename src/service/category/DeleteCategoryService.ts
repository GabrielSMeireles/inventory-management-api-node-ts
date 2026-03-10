import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoriesRepositories";

class DeleteCategoryService{
    async execute(id: string){
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const category = await categoryRepository.findOne(id);
        if(!category){
            throw new Error("Category not found");
        }
        await categoryRepository.remove(category);
        return {message : "Categoria excluida com sucesso"}
    }
}
export {DeleteCategoryService}; 