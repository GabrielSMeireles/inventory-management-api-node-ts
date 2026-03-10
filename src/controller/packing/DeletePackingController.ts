import { Request, Response } from "express";
import { DeletePackingService } from "../../service/packing/DeletePackingService";

class DeletePackingController {
    async handle(request: Request, response: Response) {
        const { name, description, material, height, width, length, price, wheight } = request.body;
        const id = request.params.id;
        const deletePackingervice = new DeletePackingService();
        const msg = await deletePackingervice.execute(id);

        response.json(msg);
    }
}
    export { DeletePackingController };
