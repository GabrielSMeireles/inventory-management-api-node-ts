import { Request, Response } from "express";
import { DeleteProductsService } from "../../service/products/DeleteProductService";

class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { name, category, description, price } = request.body;
        const id = request.params.id;
        const deleteProductsService = new DeleteProductsService();
        const msg = await deleteProductsService.execute(id);

        response.json(msg);
    }
}
    export { DeleteProductController };
