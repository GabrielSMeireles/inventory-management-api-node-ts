import {Request, Response} from "express";
import { ListClientService } from "../../service/client/ListClientService";

class ListClientController{
    async handle(request: Request, response: Response){
        const listproductsService = new ListClientService();
        const clients = await listproductsService.execute();

      response.json(clients);
    };
}
    export{ListClientController}

