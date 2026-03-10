import { Request, Response } from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

class CreateClientController {
    async handle(request: Request, response: Response) {
        const { name, phone, email, address, neighbor, city, state} = request.body;

        const createClientService = new CreateClientService();
        const client = await createClientService.execute({
            name:name,
            phone:phone,
            email:email,
            address:address,
            neighbor:neighbor,
            city:city,
            state:state
        });

        response.json({ message: "Registro de Cliente incluído com sucesso" });
    }
}
    export { CreateClientController };
