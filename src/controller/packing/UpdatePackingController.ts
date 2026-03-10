import { Request, Response } from "express";
import { UpdatePackingService } from "../../service/packing/UpdatePackingService";

class UpdatePackingController {
    async handle(request: Request, response: Response) {
        const { name, description, material, height, width, length, price, wheight } = request.body;
        const id = request.params.id;

        const updatePackingService = new UpdatePackingService();
        const packing = await updatePackingService.execute({
            id: id,
            name: name,
            description: description,
            material: material,
            height: height,
            width: width,
            length: length,
            price: price,
            wheight: wheight
        });

        response.json({ message: "Embalagem "+ id + " alterada com sucesso" });
    }
}
    export { UpdatePackingController };
