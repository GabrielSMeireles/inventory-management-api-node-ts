import { Request, Response } from "express";
import { CreateProductsService } from "../../service/products/CreateProductService";
import { create } from "domain";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, category, description, price } = request.body;
        const createProductsService = new CreateProductsService();
        const product = await createProductsService.execute({
            name:name,
            category:category,
            description:description,
            price:price
        });

        response.json({ message: "Produto incluído com sucesso" });
    }
}
    export { CreateProductController };
