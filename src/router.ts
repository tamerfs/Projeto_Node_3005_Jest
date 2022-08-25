import { Router} from 'express'
import { usersServices } from './services/userServices'


const routes = Router()
const Servicos = new usersServices()

// seria o db temporario para testar o API

routes.get('/users', Servicos.listarUsuario)

routes.post('/users', Servicos.criarUsuario)


//status code 
//200 sucesso 201 quando cria um dado
//404 nao encontrado

export {routes}