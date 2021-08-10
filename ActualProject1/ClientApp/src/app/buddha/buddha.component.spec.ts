// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BuddhaComponent } from './buddha.component';

let component: BuddhaComponent;
let fixture: ComponentFixture<BuddhaComponent>;

describe('buddha component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BuddhaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BuddhaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
