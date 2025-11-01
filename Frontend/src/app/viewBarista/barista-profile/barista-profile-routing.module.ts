import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaristaProfilePage } from './barista-profile.page';

const routes: Routes = [
  {
    path: '',
    component: BaristaProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaristaProfilePageRoutingModule {}
