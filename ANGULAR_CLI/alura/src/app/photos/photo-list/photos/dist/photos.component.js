"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotosComponent = void 0;
var core_1 = require("@angular/core");
var PhotosComponent = /** @class */ (function () {
    function PhotosComponent() {
        this.photos = [];
        this.rows = [];
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.rows = this.groupColumns(this.photos);
    };
    PhotosComponent.prototype.groupColumns = function (photos) {
        var newRows = [];
        for (var index = 0; index < photos.length; index += 3) {
            newRows.push(photos.slice(index, index + 3));
        }
        return newRows;
    };
    __decorate([
        core_1.Input()
    ], PhotosComponent.prototype, "photos");
    PhotosComponent = __decorate([
        core_1.Component({
            selector: 'ap-photos',
            templateUrl: './photos.component.html',
            styleUrls: ['./photos.component.css']
        })
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
