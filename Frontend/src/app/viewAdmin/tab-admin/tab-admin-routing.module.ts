import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabAdminPage } from './tab-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TabAdminPage,
    children: [
      {
        path: 'manage-product',
        loadChildren: () => import('../manage-product/manage-product.module').then(m => m.ManageProductPageModule)
      },
      {
        path: 'manage-client',
        loadChildren: () => import('../manage-client/manage-client.module').then(m => m.ManageClientPageModule)
      },
      {
        path: 'manage-pay',
        loadChildren: () => import('../manage-pay/manage-pay.module').then(m => m.ManagePayPageModule)
      },
      {
        path: 'manage-order',
        loadChildren: () => import('../manage-order/manage-order.module').then(m => m.ManageOrderPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'manage-product',
        pathMatch: 'full'
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAdminPageRoutingModule { }
