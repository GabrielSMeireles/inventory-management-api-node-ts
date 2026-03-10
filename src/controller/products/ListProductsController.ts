import {Request, Response} from "express";
import { ListProductsService } from "../../service/products/ListProductService";

class ListProductController{
    async handle(request: Request, response: Response){
        const listproductsService = new ListProductsService();
        const products = await listproductsService.execute();

      response.json(products);
    };
}
    export{ListProductController}

