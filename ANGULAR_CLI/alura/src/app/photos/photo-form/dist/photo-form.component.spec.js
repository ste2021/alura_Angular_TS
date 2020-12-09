"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var photo_form_component_1 = require("./photo-form.component");
describe('PhotoFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [photo_form_component_1.PhotoFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(photo_form_component_1.PhotoFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
