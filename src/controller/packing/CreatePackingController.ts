import { Request, Response } from "express";
import { CreatePackingService } from "../../service/packing/CreatePackingService";

class CreatePackingController {
    async handle(request: Request, response: Response) {
        const { name, description, material, height, width, length, price, wheight } = request.body;
        const cratePackingervice = new CreatePackingService();
        const packing = await cratePackingervice.execute({
            name: name,
            description: description,
            material: material,
            height: height,
            width: width,
            length: length,
            price: price,
            wheight: wheight
        });

        response.json({ message: "Embalagem incluída com sucesso" });
    }
}
    export { CreatePackingController };
