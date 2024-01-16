import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService"

class DeleteCustomerController{
  async handle(req: FastifyRequest, res: FastifyReply){
    const { id } = req.query as {id: string}

    const customerService = new DeleteCustomerService()

    const response = await customerService.execute({id})
    
    res.send(response)
  }
}

export {DeleteCustomerController}