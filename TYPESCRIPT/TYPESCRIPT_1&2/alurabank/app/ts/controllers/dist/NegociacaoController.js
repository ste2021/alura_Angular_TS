"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NegociacaoController = void 0;
var index_1 = require("../views/index");
var index_2 = require("../models/index");
var index_3 = require("../helpers/decorators/index");
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this._negociacoes = new index_2.Negociacoes();
        this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
        this._mensagemView = new index_1.MensagemView('#mensagemView');
        this._negociacoesView.update(this._negociacoes);
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var data = new Date(this._inputData.val().replace(/-/g, ','));
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }
        var negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    };
    NegociacaoController.prototype._ehDiaUtil = function (data) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    };
    __decorate([
        index_3.domInject('#data')
    ], NegociacaoController.prototype, "_inputData");
    __decorate([
        index_3.domInject('#quantidade')
    ], NegociacaoController.prototype, "_inputQuantidade");
    __decorate([
        index_3.domInject('#valor')
    ], NegociacaoController.prototype, "_inputValor");
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
//pra impedir que as negociacoes sejam feitos em dias não úteis
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
