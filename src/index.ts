import { routes } from './router'
import Express from "express";

// trocado require para express direto

const server = Express();
const port = 3005;
const end = "http://localhost:";
server.use(Express.json());
server.use(routes);


server.listen(port, ()=> {
    console.log("Server rodando em "+ end +port + "/users")
});


