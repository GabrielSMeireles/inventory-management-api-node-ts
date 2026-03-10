import { IUserRequest } from "../../Interface/IUserInterface";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
class AuthClientService {
  async execute({ email, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email é obrigatório");
    }
    if (!password) {
      throw new Error("Password é obrigatório");
    }

    const userRepositories = getCustomRepository(UserRepositories);
    const user = await userRepositories.findOne({ email, });

    if (!user) {
      throw new Error("Incorrect email");
    }

    const passwordMatch = await compare(password,user?.password,);
    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }
    // Gerar token
    const token = sign(
      { email: email, },
      "mobilefatec",
      { subject: ("others"), expiresIn: "1d", }
    );
    return token;
  }
}
export { AuthClientService };