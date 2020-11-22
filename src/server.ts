import express from 'express';
import routes from './routes';
import './data/connection';

var server = express();
server.use(express.json());
server.use(routes);
//res.end("Hello");
//server.get("/:id", (req, res) => {
//let user = req.query; // params //body
//console.log(user);
//res.json({user: "Diego"}); //});

server.get("/", (req, res) => {
    let user = req.body;
    console.log(user);
    res.json({user: "Diego"});
});

server.listen(3333);
