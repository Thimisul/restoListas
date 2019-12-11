import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'lista8/ex2',
    loadChildren: () => import('./lista8/ex2/ex2.module').then( m => m.Ex2PageModule)
  },
  {
    path: 'lista8/ex3',
    loadChildren: () => import('./lista8/ex3/ex3.module').then( m => m.Ex3PageModule)
  },
  {
    path: 'lista9/login',
    loadChildren: () => import('./lista9/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista9/registro',
    loadChildren: () => import('./lista9/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'lista9/noticias',
    loadChildren: () => import('./lista9/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'lista9/modal-noticia',
    loadChildren: () => import('./lista9/modal-noticia/modal-noticia.module').then( m => m.ModalNoticiaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
