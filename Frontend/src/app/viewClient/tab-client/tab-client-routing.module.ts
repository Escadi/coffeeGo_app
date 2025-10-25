import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabClientPage } from './tab-client.page';

const routes: Routes = [
  {
    path: '',
    component: TabClientPage,
    children: [
      {
        path: 'product-list',
        loadChildren: () => import('../product-list/product-list.module').then(m => m.ProductListPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabClientPageRoutingModule { }
