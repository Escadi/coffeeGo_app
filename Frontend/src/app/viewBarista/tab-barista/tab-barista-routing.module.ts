import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBaristaPage } from './tab-barista.page';

const routes: Routes = [
  {
    path: '',
    component: TabBaristaPage,
    children: [
      {
        path: 'barista-profile',
        loadChildren: () => import('../barista-profile/barista-profile.module').then(m => m.BaristaProfilePageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBaristaPageRoutingModule { }
