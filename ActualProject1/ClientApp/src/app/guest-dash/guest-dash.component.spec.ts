/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GuestDashComponent } from './guest-dash.component';

let component: GuestDashComponent;
let fixture: ComponentFixture<GuestDashComponent>;

describe('guest-dash component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GuestDashComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GuestDashComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});