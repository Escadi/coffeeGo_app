import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePayPage } from './manage-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePayPageRoutingModule {}
