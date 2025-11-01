import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.route.navigateByUrl("/login-users");
  }

}
