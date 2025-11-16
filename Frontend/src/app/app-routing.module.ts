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
    loadChildren: () => import('./auth/login-users/login-users.module').then( m => m.LoginUsersPageModule)
  },
  {
    path: 'tab-admin',
    loadChildren: () => import('./viewAdmin/tab-admin/tab-admin.module').then( m => m.TabAdminPageModule)
  },
  {
    path: 'client-form',
    loadChildren: () => import('./auth/client-form/client-form.module').then( m => m.ClientFormPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./viewAdmin/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'upload-product/:id',
    loadChildren: () => import('./viewAdmin/upload-product/upload-product.module').then( m => m.UploadProductPageModule)
  },
  {
    path: 'tab-client',
    loadChildren: () => import('./viewClient/tab-client/tab-client.module').then( m => m.TabClientPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
