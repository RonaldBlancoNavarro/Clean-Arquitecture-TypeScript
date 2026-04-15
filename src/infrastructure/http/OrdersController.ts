import {FastifyRequest, FastifyReply} from "fastify";
import { createOrder } from "../../composition/container"; //inyectado ya compuesto

export const OrdersController = {
    async create(req: FastifyRequest, reply: FastifyReply) {
        const { orderId, customerId } = req.body as any
        const out = await createOrder.execute({ orderId, customerId });
        reply.code(201).send(out);
    }
}