import {Request, Response} from 'express';
import MembrosDAO from '../dao/MembrosDAO';
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
            motivation
        } = req.body;

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
            motivation
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