import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomersService";


class ListCustomerController{
  async handle(req: FastifyRequest, res: FastifyReply){
    const listCustomerSevice = new ListCustomerService()

    const customers = await listCustomerSevice.execute();

    res.send(customers.length > 0? customers : { message: "Sem clientes"}) 
  }
}

export {ListCustomerController}