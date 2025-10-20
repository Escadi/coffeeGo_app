import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePayPageRoutingModule } from './manage-pay-routing.module';

import { ManagePayPage } from './manage-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePayPageRoutingModule
  ],
  declarations: [ManagePayPage]
})
export class ManagePayPageModule {}
