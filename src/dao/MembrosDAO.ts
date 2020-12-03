/*estabeler a relação com os elementos
objetos representam os elementos do banco de dados*/
//metodo create
import {response} from 'express';
import { getRepository } from 'typeorm';
import Area from '../models/areas';
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
            relations: ["areas"]
        });
        return membros;
    }

    async readById(id:number) {
        const repository = getRepository(Membros);
        const membros = await repository.findOneOrFail(id, {
            relations: ['areas']
        });
        return membros;
    }

    async remove(id:number) {
        const repository = getRepository(Membros);
        const removed = await repository.delete(id);
    }
}

export default MembrosDAO;