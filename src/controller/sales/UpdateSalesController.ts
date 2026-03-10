import { Request, Response } from "express";
import { UpdateSalesService } from "../../service/sales/UpdateSalesService";

class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const { date, description, product, quantity, total, client } = request.body;
        const id = request.params.id;

        const updateSalesService = new UpdateSalesService();
        const sale = await updateSalesService.execute({
            id: id,
            date:date,
            description:description,
            product:product,
            quantity:quantity,
            total:total,
            client:client
        });

        response.json({ message: "Venda "+ id + " alterado com sucesso" });
    }
}
    export { UpdateSalesController };
