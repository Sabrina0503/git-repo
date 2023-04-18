export abstract class Animal {
    getNombre() {
        throw new Error("Method not implemented.");
    }
    patas: number;

    constructor(P_Patas: number) {
        this.patas = P_Patas;
    }

    abstract comer(): void;
    abstract caminar(patas: number): void;

    getPatas(): number { return this.patas }
    setPatas(patas: number): void { this.patas = patas; }
}