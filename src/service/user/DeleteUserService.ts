import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

class DeleteUserService{
    async execute(id: string){
        const userRepository = getCustomRepository(UserRepositories);
        const user = await userRepository.findOne(id);

        if(!user){
            return {message : "Usuario nao encontrado"};
        }
        
        await userRepository.remove(user);
        return {message : "Usuario excluido com sucesso"}
    }
}
export {DeleteUserService}; 