"use strict";
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this.quantidade * this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Negociacao.prototype.paraTexto = function () {
        console.log('-- paraTexto --');
        console.log("Data: " + this.data + "\n            Quantidade: " + this.quantidade + ", \n            Valor: " + this.valor + ", \n            Volume: " + this.volume);
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
