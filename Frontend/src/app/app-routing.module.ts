import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-users',
    loadChildren: () => import('./login-users/login-users.module').then( m => m.LoginUsersPageModule)
  },
  {
    path: 'tab-admin',
    loadChildren: () => import('./viewAdmin/tab-admin/tab-admin.module').then( m => m.TabAdminPageModule)
  },
  {
    path: 'client-form',
    loadChildren: () => import('./client-form/client-form.module').then( m => m.ClientFormPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
