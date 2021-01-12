"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoListModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var photo_list_component_1 = require("./photo-list.component");
var photos_component_1 = require("./photos/photos.component");
var load_button_component_1 = require("./load-button/load-button.component");
var filter_by_description_pipe_1 = require("./filter-by-description.pipe");
var photo_module_1 = require("../photo/photo.module");
var card_module_1 = require("../../shared/components/card/card.module");
var search_component_1 = require("./search/search.component");
var darken_on_hover_module_1 = require("src/app/shared/directives/darken-on-hover/darken-on-hover.module");
var PhotoListModule = /** @class */ (function () {
    function PhotoListModule() {
    }
    PhotoListModule = __decorate([
        core_1.NgModule({
            declarations: [
                photo_list_component_1.PhotoListComponent,
                photos_component_1.PhotosComponent,
                load_button_component_1.LoadButtonComponent,
                filter_by_description_pipe_1.FilterByDescription,
                search_component_1.SearchComponent
            ],
            imports: [
                common_1.CommonModule,
                photo_module_1.PhotoModule,
                card_module_1.CardModule,
                darken_on_hover_module_1.DarkenOnHoverModule
            ]
        })
    ], PhotoListModule);
    return PhotoListModule;
}());
exports.PhotoListModule = PhotoListModule;
