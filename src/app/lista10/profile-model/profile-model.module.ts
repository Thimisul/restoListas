import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileModelPageRoutingModule } from './profile-model-routing.module';

import { ProfileModelPage } from './profile-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileModelPageRoutingModule
  ],
  declarations: [ProfileModelPage]
})
export class ProfileModelPageModule {}
