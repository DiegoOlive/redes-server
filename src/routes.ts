import { Router } from "express";
import MembrosController from './controllers/MembrosController';

//Caso quisesse ter imagens
//import multer from 'multer';
//import path from 'path';
//import {uuid} from 'uuidv4';

const membrosController: MembrosController = new MembrosController(); 

//const config = multer({
//    storage: multer.diskStorage({
//        destination: path.join(__dirname,'..','uploads/')
//        filename(req, file, callback){
//            const fileNme = 
//        }
//    })
//});

const routes = Router();

routes.route('/membros')
.get(membrosController.read)
.post(membrosController.create);

routes.route('/membros/:id')
.put(membrosController.update)
.delete(membrosController.delete);
export default routes;