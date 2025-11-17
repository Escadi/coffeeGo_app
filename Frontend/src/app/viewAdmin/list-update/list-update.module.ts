import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUpdatePageRoutingModule } from './list-update-routing.module';

import { ListUpdatePage } from './list-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUpdatePageRoutingModule
  ],
  declarations: [ListUpdatePage]
})
export class ListUpdatePageModule {}
