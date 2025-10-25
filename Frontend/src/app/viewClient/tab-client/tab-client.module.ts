import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabClientPageRoutingModule } from './tab-client-routing.module';

import { TabClientPage } from './tab-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabClientPageRoutingModule
  ],
  declarations: [TabClientPage]
})
export class TabClientPageModule {}
