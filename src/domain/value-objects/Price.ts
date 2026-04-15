export class Price {
    private constructor(readonly amount: number, readonly currency: "EUR" | "USD") {}

    //regla de negocio: el precio no puede ser negativo, y se redondea a dos decimales
    public static create(amount: number, currency: "EUR" | "USD"){
        if(!Number.isFinite(amount) || amount < 0)    throw new Error("invalid amount");
        const rounded = Math.round(amount * 100) / 100;
        return new Price(rounded, currency);
    }
}