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
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var photo_component_1 = require("./photo/photo.component");
var photo_list_component_1 = require("./photo-list/photo-list.component");
var photo_form_component_1 = require("./photo-form/photo-form.component");
var photos_component_1 = require("./photo-list/photos/photos.component");
var PhotosModule = /** @class */ (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        core_1.NgModule({
            declarations: [
                photo_component_1.PhotoComponent,
                photo_list_component_1.PhotoListComponent,
                photo_form_component_1.PhotoFormComponent, photos_component_1.PhotosComponent
            ],
            imports: [http_1.HttpClientModule,
                common_1.CommonModule
            ]
        })
    ], PhotosModule);
    return PhotosModule;
}());
exports.PhotosModule = PhotosModule;
