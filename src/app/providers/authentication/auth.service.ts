import {Injectable} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import{AngularFireDatabase} from 'angularfire2/database';
import{AngularFireAuthProvider} from 'angularfire2/auth';

// Import Observable
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth,
              public af:AngularFireDatabase) {
  }

  loginWithGoogle() {

    return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res)=>{

      console.log(res.users.email);
      console.log("dds");
    })
      .catch(function(error) {
        // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
       // The email of the user's account used.
      var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }

  logout() {

    return firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

  }

  loginWithFacebook() {
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(token);
      console.log(user);

    }) .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  loginWithEmail(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(token);
      console.log(user);
    });
  }

  signup(email, password) {
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email,password).then(function (result) {
      alert('Account created');
    });

  }

  checkUserLoggedIn(){
    return localStorage.getItem('isLoggedIn') ? true : false;
  }


}
