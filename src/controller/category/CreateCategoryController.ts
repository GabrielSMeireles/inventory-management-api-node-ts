import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({
            name:name,
            description : description
        });

        response.json({ message: "Categoria incluída com sucesso" });
    }
}
    export { CreateCategoryController };
