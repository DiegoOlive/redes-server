import express from 'express';
import './data/connection';

var server = express();
server.use(express.json());
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
