import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoticiaPage } from './modal-noticia.page';

describe('ModalNoticiaPage', () => {
  let component: ModalNoticiaPage;
  let fixture: ComponentFixture<ModalNoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNoticiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
