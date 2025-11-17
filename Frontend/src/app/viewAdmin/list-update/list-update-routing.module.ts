import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUpdatePage } from './list-update.page';

const routes: Routes = [
  {
    path: '',
    component: ListUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUpdatePageRoutingModule {}
