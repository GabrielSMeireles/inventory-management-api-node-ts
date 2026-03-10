import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
  sub: string;
  email: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("ensureAuthenticated called");
  // Receber o token
  const authToken = request.headers.authorization;

  console.log("authToken:", authToken);

  // Validar se token está preenchido
  if (!authToken) {
    console.log("Auth token not found");
    response.status(401).end();
  }
    const [, token] = authToken.split(" ");
    console.log("token:", token);
  
    try {
      // Validar se token é válido
      const { sub,email } = verify(
        token,
        "mobilefatec"
      ) as IPayload;
  
      console.log("email:", email);
      console.log("sub:", sub);
  
      //Vai para o proximo middleware
      next();
    } catch (err) {
      console.log("Error:", err);
      response.status(401).end();
    }

  

}