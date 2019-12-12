import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileModelPage } from './profile-model.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileModelPageRoutingModule {}
