"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const express_1 = __importDefault(require("express"));
// trocado require para express direto
const server = (0, express_1.default)();
const port = 3005;
const end = "http://localhost:";
server.use(express_1.default.json());
server.use(router_1.routes);
server.listen(port, () => {
    console.log("Server rodando em " + end + port + "/users");
});
