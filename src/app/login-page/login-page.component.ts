import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AuthService} from '../providers/authentication/auth.service';
import * as firebase from 'firebase/app';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
email:String;
password:String;
phone: String;
  fullName: String;
  db= firebase.database();
  loginForm: FormGroup;

  constructor(public as:AuthService,public router:Router) {
    if(firebase.auth().currentUser) {
      this.router.navigate['dashboard'];
      console.log('check')

    }
    this.loginForm = new FormGroup({
      'email': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)
    });
  }


  ngOnInit() {
  }

  login(){

    this.as.loginWithGoogle().then((res)=>{
      console.log("dds");
      console.log(res);

      this.router.navigate(['dashboard']);

    })
  }

  loginFacebook() {
    this.as.loginWithFacebook().then((res)=>{
      this.router.navigate(['dashboard']);

    })

  }

  loginWithEmail(email,password){
    this.as.loginWithEmail(email,password).then((res)=>{
      this.router.navigate(['dashboard'])
    })
  }

  signupWithEmail(email, password,fullName,phone) {
    this.as.signup(email,password).then((res)=>{this.router.navigate(['dashboard']);
    this.writeUserData(this.fullName,this.phone,this.email,this.password);
    })

  }



  writeUserData(fullName,phone,email,password){
    // firebase.database().ref('users/' + as.afAuth.auth.userId).set({
    //   username: name,
    //   email: email,
    //   imageUrl   profile_picture :
    // });
  }


}
