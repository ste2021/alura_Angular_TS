"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.View = void 0;
var index_1 = require("../helpers/decorators/index");
var View = /** @class */ (function () {
    function View(seletor, escapar) {
        if (escapar === void 0) { escapar = false; }
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
    View.prototype.update = function (model) {
        var template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.html(template);
    };
    __decorate([
        index_1.logarTempoDeExecucao()
    ], View.prototype, "update");
    return View;
}());
exports.View = View;
