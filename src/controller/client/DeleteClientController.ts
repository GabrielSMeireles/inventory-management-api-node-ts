import { Request, Response } from "express";
import { DeleteClientService } from "../../service/client/DeleteClientService";

class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf, admin,password } = request.body;
        const id = request.params.id;

        const deleteClientService = new DeleteClientService();
        const msg = await deleteClientService.execute(id);

        response.json(msg);
    }
}
    export { DeleteClientController };
