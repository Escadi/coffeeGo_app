import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabClientPage } from './tab-client.page';

const routes: Routes = [
  {
    path: '',
    component: TabClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabClientPageRoutingModule {}
