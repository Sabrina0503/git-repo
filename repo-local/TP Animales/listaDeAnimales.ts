import { Animal } from "./animal";
//-----------------------------------------------------------------------------
export class ListaDeAnimales {
    private animales: Animal[];

    constructor() {
        this.animales =[] ;
    }
    public buscar(animal: Animal): boolean {
        const indice: number = this.animales.findIndex(aa => aa.getNombre() === animal.getNombre());
        return (indice >= 0)
    }
    public agregarAnimal(animal: Animal): void {
        this.animales.push(animal);
    }
    public removerAnimal(animal: Animal): void {
        const indice: number = this.animales.findIndex(aa => aa.getNombre() === animal.getNombre());
        if (indice >= 0) {
            console.log(this.animales[indice], `ha sido elimnado/a.`);
            this.animales.splice(indice, 1);
        }
    }
}