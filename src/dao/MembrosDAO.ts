/*estabeler a relação com os elementos
objetos representam os elementos do banco de dados*/
//metodo create
import { getRepository } from 'typeorm';
import Membros from '../models/membros';


class MembrosDAO{
    async create(membros: Membros): Promise<Membros> {
        const repository = getRepository(Membros);
        const membrosEntity = repository.create(membros);
        const membrosSaved = await repository.save(membrosEntity);
        return membrosSaved;
    }

    async read(): Promise<Membros[]> {
        const repository = getRepository(Membros);
        const membros = await repository.find({
            relations: ["areas", "photo"]
        });
        return membros;
    }
}

export default MembrosDAO;