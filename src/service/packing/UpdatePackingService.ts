import { IPackingRequest } from "../../Interface/IPackingInterface";
import { PackingRepositories } from "../../repositories/PackingRepositories";
import { getCustomRepository } from "typeorm";

class UpdatePackingService{
    async execute({id, name, description, material, height, width, length, price, wheight}: IPackingRequest){
        if(!id && !name && !description && !material && !height && !width && !length && !price && !wheight){
            throw new Error('Preencha todos os campos');
        }

        if(height <= 0){
            throw new Error('Altura deve ser maior que zero');
        }
        if(width <= 0){
            throw new Error('largura deve ser maior que zero');
        }
        if(length <= 0){
            throw new Error('Comprimento deve ser maior que zero');
        }

        if(price <= 0){
            throw new Error('O preço deve ser maior que zero');
        }
        if(wheight <= 0){
            throw new Error('Peso deve ser maior que zero');
        }

        const packingRepository = getCustomRepository(PackingRepositories);
        const packingExists = await packingRepository.findOne(id);
        if(!packingExists){
            throw new Error('Embalagem nao encontrada');
        }

        packingExists.name = name;
        packingExists.material = material;
        packingExists.height = height;
        packingExists.width = width;
        packingExists.length = length;
        packingExists.price = price;
        packingExists.wheight = wheight;
        packingExists.description = description;

        return await packingRepository.update(id, packingExists);
    }
}
export {UpdatePackingService}; 