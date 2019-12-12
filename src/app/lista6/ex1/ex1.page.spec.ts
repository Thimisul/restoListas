import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Page } from './ex1.page';

describe('Ex1Page', () => {
  let component: Ex1Page;
  let fixture: ComponentFixture<Ex1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
