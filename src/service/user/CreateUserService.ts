import { IUserRequest } from "../../Interface/IUserInterface";
import { UserRepositories } from "../../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

class CreateUserService{
    async execute({name, email, admin = false, password}: IUserRequest){
        if(!email){
            throw new Error("Email incorreto");
        }

        const userRepository = getCustomRepository(UserRepositories);
        const userAlreadyExists = await userRepository.findOne({email});

        if(userAlreadyExists)
            throw new Error("User already exists");

        const passwordhash = await hash(password, 8);
        const user = userRepository.create({name, email, admin, password: passwordhash});
        await userRepository.save(user);

        return user;

    }
}
export {CreateUserService};