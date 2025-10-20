import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageClientPageRoutingModule } from './manage-client-routing.module';

import { ManageClientPage } from './manage-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageClientPageRoutingModule
  ],
  declarations: [ManageClientPage]
})
export class ManageClientPageModule {}
