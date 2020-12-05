"use strict";
exports.__esModule = true;
exports.NegociacaoController = void 0;
var index_1 = require("../views/index");
var index_2 = require("../models/index");
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this._negociacoes = new index_2.Negociacoes();
        this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
        this._mensagemView = new index_1.MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
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
