import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin,password } = request.body;
        const id = request.params.id;
        const deleUserService = new DeleteUserService();
        const msg = await deleUserService.execute(id);


        response.json(msg);
    }
}
    export { DeleteUserController };
