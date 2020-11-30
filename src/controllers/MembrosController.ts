import {Request, Response} from 'express';
import MembrosDAO from '../dao/MembrosDAO';
import Area from '../models/areas';
import Image from '../models/image';
import Membros from '../models/membros';

//MVC - realiza a interação das visualizações
//interação com o modelo - objeto
class MembrosController{
    membrosDAO: MembrosDAO = new MembrosDAO ();
    //conexão com o banco de dados
    
    create = async (req:Request, res:Response) => {
        const {
            name,
            lastname,
            email,
            phone,
            senha,
            confSenha,
            course,
            degree,
            nivel,
            motivation,
            areas,
            photo //quando criar um elemento passar esse photo
        } = req.body;

        //preciso converter de string para um obj area
        const areasObjs:Area[] = areas.map((area:string) => {
            return {name: area}
        });

        const image: Image = {image: photo}

        const data: Membros = {
            name,
            lastname,
            email,
            phone,
            senha,
            confSenha,
            course,
            degree,
            nivel,
            motivation,
            areas: areasObjs,
            photo: image        
        }
        const membros = await this.membrosDAO.create(data); 
        return res.status(201).json(membros); //codigo de estado para criar
    }
    
    read = async (req:Request, res:Response) => {
        const membros = await this.membrosDAO.read();
        return res.json(membros);
    }
}

export default MembrosController;