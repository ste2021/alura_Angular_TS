"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotosModule = void 0;
var core_1 = require("@angular/core");
var photo_component_1 = require("./photo/photo.component");
var PhotosModule = /** @class */ (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        core_1.NgModule({
            declarations: [photo_component_1.PhotoComponent],
            exports: [photo_component_1.PhotoComponent]
        })
    ], PhotosModule);
    return PhotosModule;
}());
exports.PhotosModule = PhotosModule;
