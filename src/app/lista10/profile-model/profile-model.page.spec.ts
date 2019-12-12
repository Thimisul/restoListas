import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileModelPage } from './profile-model.page';

describe('ProfileModelPage', () => {
  let component: ProfileModelPage;
  let fixture: ComponentFixture<ProfileModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
