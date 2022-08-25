"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const userServices_1 = require("./services/userServices");
const routes = (0, express_1.Router)();
exports.routes = routes;
const Servicos = new userServices_1.usersServices();
// seria o db temporario para testar o API
routes.get('/users', Servicos.listarUsuario);
routes.post('/users', Servicos.criarUsuario);
