import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import Membros from '../models/membros';

class AuthController{
  async authenticate(req: Request, res: Response){
    const repoitory = getRepository(Membros);
    const {email, senha} = req.body;

    const user = await repoitory.findOne({ where: {email}});
    if(!user){
      return res.sendStatus(401);
    }
    
    if(req.body.senha != user.senha){
      return res.sendStatus(401);
    }
    const provider = true;
    const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'});
    const {id, name,
      lastname,
      phone,
      confSenha,
      course,
      degree,
      nivel,
      motivation,
      areas} = user;
    return res.json({user : {id,
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
    }, token, provider});
  }
}

export default AuthController;