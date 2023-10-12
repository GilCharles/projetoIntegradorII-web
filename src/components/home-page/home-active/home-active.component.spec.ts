/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeActiveComponent } from './home-active.component';

describe('HomeActiveComponent', () => {
  let component: HomeActiveComponent;
  let fixture: ComponentFixture<HomeActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
