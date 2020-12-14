"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoListComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(activatedRoute, photoService) {
        this.activatedRoute = activatedRoute;
        this.photoService = photoService;
        this.photos = [];
        this.filter = '';
        this.debounce = new rxjs_1.Subject();
        this.hasMore = true;
        this.currentPage = 1;
        this.userName = '';
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photos = this.activatedRoute.snapshot.data['photos'];
        this.debounce
            .pipe(operators_1.debounceTime(300))
            .subscribe(function (filter) { return _this.filter = filter; });
    };
    PhotoListComponent.prototype.ngOnDestroy = function () {
        this.debounce.unsubscribe();
    };
    PhotoListComponent.prototype.load = function () {
        var _this = this;
        this.photoService
            .listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe(function (photos) {
            _this.photos = _this.photos.concat(photos);
            if (!photos.length)
                _this.hasMore = false;
        });
    };
    PhotoListComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-list',
            templateUrl: './photo-list.component.html',
            styleUrls: ['./photo-list.component.css']
        })
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
