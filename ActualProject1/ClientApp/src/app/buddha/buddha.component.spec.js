"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var buddha_component_1 = require("./buddha.component");
var component;
var fixture;
describe('buddha component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [buddha_component_1.BuddhaComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(buddha_component_1.BuddhaComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', testing_1.async(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=buddha.component.spec.js.map