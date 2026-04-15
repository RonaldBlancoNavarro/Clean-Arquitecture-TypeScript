import { Order } from "../../domain/entities/Order";
import { OrderRepository } from "../ports/OrderRepository";
import { expect } from "vitest";

export type CreateOrderInput = { orderId: string, customerId: string };
export type CreateOrderOutput = { orderId: string };


export class CreateOrder {
    constructor(private readonly repo: OrderRepository) {

        async execute({ orderId, customerId }: CreateOrderInput): Promise < CreateOrderOutput > {
            const exists = await this.repo.findbyId(orderId);
            if(exists) throw new Error("Order already exists");
            const order = new Order(orderId, customerId);
            await this.repo.save(order);
            return { orderId: order.id };
        }
    }
}
