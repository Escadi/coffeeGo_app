import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.page.html',
  styleUrls: ['./login-users.page.scss'],
  standalone: false
})
export class LoginUsersPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  openRegisterClient() {
    this.route.navigateByUrl("/client-form");
  }
  openAdmin(){
    this.route.navigateByUrl("/tab-admin");
  }
  openUser(){
    this.route.navigateByUrl("/tab-client");
  }

  ngOnInit() {
  }



}
