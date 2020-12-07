"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Negociacoes = void 0;
var index_1 = require("../helpers/decorators/index");
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.paraArray = function () {
        return [].concat(this._negociacoes);
    };
    __decorate([
        index_1.logarTempoDeExecucao(true)
    ], Negociacoes.prototype, "adiciona");
    __decorate([
        index_1.logarTempoDeExecucao(true)
    ], Negociacoes.prototype, "paraArray");
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
