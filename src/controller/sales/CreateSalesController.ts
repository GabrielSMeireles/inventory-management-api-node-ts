import { Request, Response } from "express";
import { CreateSalesService } from "../../service/sales/CreateSalesService";

class CreateSaleController {
    async handle(request: Request, response: Response) {
        const { date, description, product, quantity, total, client } = request.body;
        const crateSaleService = new CreateSalesService();
        const sale = await crateSaleService.execute({
            date:date,
            description:description,
            product:product,
            quantity:quantity,
            total:total,
            client:client
        });

        response.json({ message: "Venda incluída com sucesso" });
    }
}
    export { CreateSaleController };
