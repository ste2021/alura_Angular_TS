"use strict";
exports.__esModule = true;
exports.imprime = void 0;
function imprime() {
    var negociacoes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        negociacoes[_i] = arguments[_i];
    }
    negociacoes.forEach(function (negociacao) { return negociacao.paraTexto(); });
}
exports.imprime = imprime;
