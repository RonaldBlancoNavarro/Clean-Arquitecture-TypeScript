import {Order} from "@domain/entities/Order";

export interface OrderRepository {
    findbyId(id: string): Promise<Order | null>;
    save(order: Order): Promise<void>;
}