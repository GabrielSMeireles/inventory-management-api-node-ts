import {Request, Response} from "express";
import { ListSalesService } from "../../service/sales/ListSalesService";

class ListSaleController{
    async handle(request: Request, response: Response){
        const listSalesService = new ListSalesService();
        const sales = await listSalesService.execute();

      response.json(sales);
    };
}
    export{ListSaleController}

