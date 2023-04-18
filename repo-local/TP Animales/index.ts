import { Araña } from './araña';
import { Gato } from './gato';
import { ListaDeAnimales } from './listaDeAnimales';
import{Pez} from'./pez';

let gato1:Gato=new Gato(4,"Carbon");
let pez1:Pez=new Pez("Juanito");
let araña1:Araña=new Araña(8);
let lista:ListaDeAnimales=new ListaDeAnimales();
lista.agregarAnimal(gato1);
lista.agregarAnimal(pez1);
lista.agregarAnimal(araña1);




console.log(lista);



