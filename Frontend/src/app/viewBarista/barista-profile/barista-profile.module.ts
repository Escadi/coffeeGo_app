import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaristaProfilePageRoutingModule } from './barista-profile-routing.module';

import { BaristaProfilePage } from './barista-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaristaProfilePageRoutingModule
  ],
  declarations: [BaristaProfilePage]
})
export class BaristaProfilePageModule {}
