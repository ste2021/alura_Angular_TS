"use strict";
exports.__esModule = true;
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var retorno = metodoOriginal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
