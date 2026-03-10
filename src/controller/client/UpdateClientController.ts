import { Request, Response } from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

class UpdateClientController {
    async handle(request: Request, response: Response) {
        const { name, phone, email, address, neighbor, city, state} = request.body;
        const id = request.params.id;

        const updateClientService = new UpdateClientService();
        const client = await updateClientService.execute({
            id: id,
            name:name,
            phone:phone,
            email:email,
            address:address,
            neighbor:neighbor,
            city:city,
            state : state
        });

        response.json({ message: "Registro de Cliente "+ id + " alterado com sucesso" });
    }
}
    export { UpdateClientController };
