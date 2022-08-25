import { makeMockResponse } from './../mocks/mockResponse';
import { Request } from 'express';
import { usersServices } from "./userServices"

  describe ('users Services', ()=>{
    const UsersServices = new usersServices();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar os nossos usuarios', ()=>{
    UsersServices.listarUsuario(mockRequest, mockResponse)
    
     expect (mockResponse.state.status).toBe(200)
     expect (mockResponse.state.json).toHaveLength(3)
    })

    it('Não deve criar um usuario com menos de 3 caracteres', () => {
      mockRequest.body = {
        nome: 'tam'
      }
      UsersServices.criarUsuario(mockRequest, mockResponse)
      expect(mockResponse.state.status).toBe(403)
      expect(mockResponse.state.json).toMatchObject({mensagem: 'Nome minimo com 4 caracteres'})
    })
 })