import { Router } from "express";

import authMiddleware from './middlewares/authMiddleware';
import MembrosController from './controllers/MembrosController';
import AuthController from './controllers/AuthController';

//Caso quisesse ter imagens
//import multer from 'multer';
//import path from 'path';
//import {uuid} from 'uuidv4';

const membrosController: MembrosController = new MembrosController(); 
const authcontroller: AuthController = new AuthController();

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
.get(authMiddleware,membrosController.read)
.post(membrosController.create);

routes.route('/membros/:id')
.put(authMiddleware,membrosController.update)
.delete(authMiddleware,membrosController.delete);

routes.route('/auth')
.post(authcontroller.authenticate);

export default routes;