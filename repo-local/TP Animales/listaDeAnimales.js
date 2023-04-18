"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
//-----------------------------------------------------------------------------
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales() {
        this.animales = [];
    }
    ListaDeAnimales.prototype.buscar = function (animal) {
        var indice = this.animales.findIndex(function (aa) { return aa.getNombre() === animal.getNombre(); });
        return (indice >= 0);
    };
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.animales.push(animal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        var indice = this.animales.findIndex(function (aa) { return aa.getNombre() === animal.getNombre(); });
        if (indice >= 0) {
            console.log(this.animales[indice], "ha sido elimnado/a.");
            this.animales.splice(indice, 1);
        }
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
