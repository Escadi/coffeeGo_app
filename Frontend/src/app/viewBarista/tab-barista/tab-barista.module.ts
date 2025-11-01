import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBaristaPageRoutingModule } from './tab-barista-routing.module';

import { TabBaristaPage } from './tab-barista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBaristaPageRoutingModule
  ],
  declarations: [TabBaristaPage]
})
export class TabBaristaPageModule {}
