import {Request, Response} from "express";
import { ListPackingService } from "../../service/packing/ListPackingService";

class ListPackingController{
    async handle(request: Request, response: Response){
        const listPackingService = new ListPackingService();
        const packing = await listPackingService.execute();

      response.json(packing);
    };
}
    export{ListPackingController}

