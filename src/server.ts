import Fastify from "fastify";
import { routes } from "./router";
import cors from '@fastify/cors'

const app = Fastify({ logger: true})

const port = process.env.PORT || 3333

app.setErrorHandler((error,request, reply)=>{
  reply.code(400).send({message: error.message})
})

const start = async ()=>{

  await app.register(routes)
  await app.register(cors)

  try{
    await app.listen(port )
  }catch(err){
    process.exit(1)
  }
}

start()