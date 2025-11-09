import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUsersPageRoutingModule } from './login-users-routing.module';

import { LoginUsersPage } from './login-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUsersPageRoutingModule
  ],
  declarations: [LoginUsersPage]
})
export class LoginUsersPageModule {}
