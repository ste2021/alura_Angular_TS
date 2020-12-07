"use strict";
exports.__esModule = true;
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao(emSegundos) {
    if (emSegundos === void 0) { emSegundos = false; }
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var unidade = 'ms';
            var divisor = 1;
            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            console.log('---------------');
            console.log("par\u00E2metros passados para o m\u00E9todo " + propertyKey + ": " + JSON.stringify(args));
            var t1 = performance.now();
            var retorno = metodoOriginal.apply(this, args);
            var t2 = performance.now();
            console.log("O retorno do m\u00E9todo " + propertyKey + " \u00E9 " + JSON.stringify(retorno));
            console.log("O m\u00E9todo " + propertyKey + " demorou " + (t2 - t1) / divisor + " " + unidade);
            return retorno;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
