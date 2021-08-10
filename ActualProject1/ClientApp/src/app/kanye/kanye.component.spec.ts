// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { KanyeComponent } from './kanye.component';

let component: KanyeComponent;
let fixture: ComponentFixture<KanyeComponent>;

describe('kanye component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ KanyeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(KanyeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
