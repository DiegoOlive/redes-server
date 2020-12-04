import express from 'express';
import routes from './routes';
import cors from 'cors';
import './data/connection';

var server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

server.get("/", (req, res) => {
    let user = req.body;
    console.log(user);
    res.json({user: "Diego"});
});

server.listen(3333);
