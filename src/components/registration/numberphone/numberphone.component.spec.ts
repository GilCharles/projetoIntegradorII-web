/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberphoneComponent } from './numberphone.component';

describe('NumberphoneComponent', () => {
  let component: NumberphoneComponent;
  let fixture: ComponentFixture<NumberphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
