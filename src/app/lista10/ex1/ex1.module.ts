import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, Platform } from '@ionic/angular';

import { Ex1PageRoutingModule } from './ex1-routing.module';

import { Ex1Page } from './ex1.page';
import { Marker } from '@ionic-native/google-maps/ngx';
import { ProfileModelPage } from '../profile-model/profile-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex1PageRoutingModule
  ],
  providers: [
    Platform
  ],
  declarations: [Ex1Page, ProfileModelPage],
  entryComponents: [ProfileModelPage]
})
export class Ex1PageModule {}
