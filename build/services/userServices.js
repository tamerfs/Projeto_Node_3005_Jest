"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = void 0;
const db_1 = require("../db");
class usersServices {
    criarUsuario(request, response) {
        const { nome } = request.body; //pego  apropriedade name dentro do objeto body
        // validação de entrada de dados.
        if (nome.length < 4) {
            return response.status(403).json({ mensagem: 'Nome minimo com 4 caracteres' });
        }
        db_1.database.push(nome);
        return response.status(201).json({ 'mensagem': `Usuário ${nome} criado com sucesso!` });
    }
    listarUsuario(request, response) {
        return response.status(200).json(db_1.database);
    }
}
exports.usersServices = usersServices;
;
