import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import MembrosDAO from '../dao/MembrosDAO';
import AreaDAO from '../dao/AreaDAO';
import Area from '../models/areas';
import Membros from '../models/membros';


//MVC - realiza a interação das visualizações
//interação com o modelo - objeto
class MembrosController{
    membrosDAO: MembrosDAO = new MembrosDAO ();
    areaDAO: AreaDAO = new AreaDAO ();
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
            areas
            //photo //quando criar um elemento passar esse photo
        } = req.body;

        if (req.body.senha != req.body.confSenha){
            return res.status(400).json({ error: 'As senhas não conferem, tente novamente' });
        }
        const repository = getRepository(Membros);
        const emailExists = await repository.findOne({ where: { email: req.body.email }});

        if(emailExists){
            return res.status(400).json({ error: 'Email Existente' });
        }
        
        let areasObjs:Area[] = [];
        if(areas){        
        //preciso converter de string para um obj area
            const areasArray:string[] = Array.from(areas);
            areasObjs = areasArray.map((area:string) => {
                return {name: area}
        });
        }   

        //Para as imagens
        //const image: Image = {image: photo}

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
            areas: areasObjs
            //photo: image        
        }

        const membros = await this.membrosDAO.create(data); 
        return res.status(201).json(membros); //codigo de estado para criar
    }
    
    read = async (req:Request, res:Response) => {
        const membros = await this.membrosDAO.read();
        return res.json(membros);
    }

    readById = async (req:Request, res:Response) => {
        const {id} = req.params;
        const membros = await this.membrosDAO.readById(Number(id));
        return membros;
    }
    //cada area fornecida seta membro e chama create area
    async createOrUpdateArea(areas:Area[], membros: Membros){
        for(let area of areas){
            area.membros = membros;
            await this.areaDAO.createArea(area);
        };
    }
    async deleteAreas(membros: Membros, areas: Area[]){
        const membrosAreas = membros.areas;
        const toRemove = membrosAreas.filter((area) =>//area que não estiver, remove
            !areas.some(areaObj => areaObj.id && areaObj.id == area.id)
        );
        for (let area of toRemove){
            await this.areaDAO.deleteArea(area);
        }
    } 

    update = async(req:Request, res:Response) => {
        const {
            name,
            lastname,
            email,
            phone,
            course,
            degree,
            nivel,
            motivation,
            areas
            //photo 
        } = req.body;

        const providedData = {
            name,
            lastname,
            email,
            phone,
            course,
            degree,
            nivel,
            motivation
            //photo 
        }
        
        let data = {}; //Objeto vazio - filtrar as definidas
        Object.entries(providedData).forEach((v) =>{ //analisar cada propriedade
            const [key, value] = v;
            if (value) {
                data = {...data, [key]: value}
            }
        }); 
        let membros = await this.readById(req, res);
        membros = {...membros, ...data}; //realizando a atualização
        await this.membrosDAO.create(membros);

        //para areas
        if(areas){
            const areasProvided: Area[] = areas; // a partir das areas passadas
            await this.createOrUpdateArea(areasProvided, membros);
            await this.deleteAreas(membros, areasProvided);
        }
        const updated = await this.readById(req, res);
        res.json(updated);
    }
    delete  = async (req:Request, res:Response) => {
        const {id} = req.params;
        await this.membrosDAO.remove(Number(id));
        res.json(`Membro de id: ${id} foi removido!`);
    }
}

export default MembrosController;