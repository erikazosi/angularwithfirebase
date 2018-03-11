import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{AuthService} from '../providers/authentication/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
email:String;

  constructor(public authService:AuthService,public router:Router) {
    var user = firebase.auth().currentUser
    if (user) {
       this.email = firebase.auth().currentUser.email;
      console.log(firebase.auth().currentUser.email);
    }

  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);

  }

}
