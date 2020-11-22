import express from 'express';

var server = express();

//res.end("Hello");
server.get("/", (req, res) => {
    res.json({user: "Diego"});
});

server.listen(3333);
