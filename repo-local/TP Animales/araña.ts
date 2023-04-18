import { Animal } from './animal';

export class Araña extends Animal {
    constructor(P_Patas: number) {
        super(P_Patas)
    }
    getpatas() {
        return this.patas
    }
    setpatas(patas: any): void {
        this.patas = patas;
    }
    public comer() {
        console.log("La araña esta comiendo");
    }
    public caminar(patas) {
        console.log("La araña esta caminando");
    }
}