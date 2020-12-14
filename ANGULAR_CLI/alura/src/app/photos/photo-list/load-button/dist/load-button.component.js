"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadButtonComponent = void 0;
var core_1 = require("@angular/core");
var LoadButtonComponent = /** @class */ (function () {
    function LoadButtonComponent() {
        this.hasMore = false;
    }
    LoadButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], LoadButtonComponent.prototype, "hasMore");
    LoadButtonComponent = __decorate([
        core_1.Component({
            selector: 'ap-load-button',
            templateUrl: './load-button.component.html',
            styleUrls: ['./load-button.component.css']
        })
    ], LoadButtonComponent);
    return LoadButtonComponent;
}());
exports.LoadButtonComponent = LoadButtonComponent;
