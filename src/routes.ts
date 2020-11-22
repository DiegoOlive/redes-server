import { Router } from "express";
import MembrosController from './controllers/MembrosController';

const membrosController: MembrosController = new MembrosController(); 
const routes = Router();

//router.get.. tbm daria certo.abnf

routes.route('/membros')
.get(membrosController.read)
.post(membrosController.create);

export default routes;