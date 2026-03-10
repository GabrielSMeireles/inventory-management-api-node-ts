import { Request, Response } from "express";
import { UpdateProductsService } from "../../service/products/UpdateProductService";

class UpdateProductController {
    async handle(request: Request, response: Response) {
        const { name, category, description, price } = request.body;
        const id = request.params.id;
        
        const updateProductsService = new UpdateProductsService();
        const product = await updateProductsService.execute({
            id: id,
            name:name,
            category:category,
            description:description,
            price:price
        });

        response.json({ message: "Produto "+ id + " alterado com sucesso" });
    }
}
    export { UpdateProductController };
