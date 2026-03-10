import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description} = request.body;
        const id = request.params.id;

        const updateCategoryService = new UpdateCategoryService();
        const category = await updateCategoryService.execute({
            id: id,
            name:name,
            description: description
        });

        response.json({ message: "Registro "+ id + " alterado com sucesso" });
    }
}
    export { UpdateCategoryController };
