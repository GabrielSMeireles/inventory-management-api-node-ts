import { IUserRequest } from "../../Interface/IUserInterface";
import {getCustomRepository} from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import {hash} from "bcryptjs";

class UpdateUserService{
    async execute({id, name, email, admin = false, password}: IUserRequest){
        if(!email){
            throw new Error("Email incorreto");
        }

        const userRepository = getCustomRepository(UserRepositories);
        const userAlreadyExists = await userRepository.findOne({
            id,

        });
        if(!userAlreadyExists){
            throw new Error("User does not exists")
        }
        const passwordhash = await hash(password, 8)
        userAlreadyExists.name = name
        userAlreadyExists.email = email
        userAlreadyExists.admin = admin
        userAlreadyExists.updated_at = new Date()
        userAlreadyExists.password = passwordhash
        return await userRepository.update(id ,userAlreadyExists)
    }
}
export {UpdateUserService}; 