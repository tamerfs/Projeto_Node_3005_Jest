import { Request, Response } from "express";
import { database } from "../db";


export class  usersServices {

    criarUsuario (request: Request, response: Response): Response {
        const { nome }  = request.body //pego  apropriedade name dentro do objeto body

        // validação de entrada de dados.
        if (nome.length < 4){
            return response.status(403).json({mensagem: 'Nome minimo com 4 caracteres'})
        }

        database.push (nome)
        return response.status(201).json({'mensagem' : `Usuário ${nome} criado com sucesso!`})
    }

        listarUsuario (request: Request, response: Response): Response {
            return response.status(200).json(database)

    }
};

