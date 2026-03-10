import { Request, Response } from "express";
import {AuthClientService} from "../../service/auth/AuthSrevice";

class AuthClientController {
    async handle(request: Request, response: Response) {
        const { email,password } = request.body;
        const authClientService = new AuthClientService();
        const auth = await authClientService.execute({
            email,
            password
        });

        response.json({ message: auth });
    }
}
    export { AuthClientController };
