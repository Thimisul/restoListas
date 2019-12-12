import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ex1Page } from './ex1.page';
import { ModalNoticiaPage } from '../modal-noticia/modal-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: Ex1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ex1Page, ModalNoticiaPage],
  entryComponents: [ModalNoticiaPage]
})
export class Ex1PageModule {}
