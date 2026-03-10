import { Request, Response } from "express";
import { DeleteSalesService } from "../../service/sales/DeleteSalesService";

class DeleteSaleController {
    async handle(request: Request, response: Response) {
        const { date, product, client, quantity, total } = request.body;
        const id = request.params.id;
        const deleteSaleService = new DeleteSalesService();
        const msg = await deleteSaleService.execute(id);

        response.json(msg);
    }
}
    export { DeleteSaleController };
