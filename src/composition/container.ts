import { InMemoryOrderRepository } from "@infra/persistence/in-memory/InMemoryOrderRepository";
import { CreateOrder } from "@application/use-cases/CreateOrderUseCase";   

const repo = new InMemoryOrderRepository();
export const createOrder = new CreateOrder(repo);
