import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ex1Page } from './ex1.page';

describe('Ex1Page', () => {
  let component: Ex1Page;
  let fixture: ComponentFixture<Ex1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
