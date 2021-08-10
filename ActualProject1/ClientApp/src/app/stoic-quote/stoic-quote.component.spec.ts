// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { StoicQuoteComponent } from './stoic-quote.component';

let component: StoicQuoteComponent;
let fixture: ComponentFixture<StoicQuoteComponent>;

describe('stoic-quote component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ StoicQuoteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(StoicQuoteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
