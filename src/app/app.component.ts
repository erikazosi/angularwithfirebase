import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {AuthService} from './providers/authentication/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LinkIt';
  token: String;


  constructor(private authService:AuthService,
              private router:Router){

  }



  checkUserLoggedIn(){
    return localStorage.getItem('isLoggedIn') ? true : false;
  }


}
