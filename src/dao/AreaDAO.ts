import { getRepository } from 'typeorm';
import Area from "../models/areas";

class AreaDAO{
    
    async createArea(area: Area):Promise<Area>{
        const repository = getRepository(Area);
        const areaEntity = repository.create(area);
        const created = await repository.save(areaEntity);//cria ou atualiza a entidade
        return created;
    }

    async deleteArea(area: Area):Promise<Area>{ //tipo de retorno
        const repository = getRepository(Area);
        const removed = await repository.remove(area);
        return removed;
    }
}

export default AreaDAO;