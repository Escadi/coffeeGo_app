import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageClientPage } from './manage-client.page';

const routes: Routes = [
  {
    path: '',
    component: ManageClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageClientPageRoutingModule {}
