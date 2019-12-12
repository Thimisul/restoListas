import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalNoticiaPage } from './modal-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNoticiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalNoticiaPage]
})
export class ModalNoticiaPageModule {}
