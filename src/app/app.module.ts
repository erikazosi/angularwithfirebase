import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
// import * as firebase from 'firebase/app';
import { FormsModule } from '@angular/forms';
import {environment} from '../environments/environment';
//firebases
import {AngularFireModule} from 'angularfire2';
import{AngularFireAuthModule} from 'angularfire2/auth';
import{AngularFireDatabaseModule} from 'angularfire2/database';
// Services
import { AuthService } from './providers/authentication/auth.service';
//components
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
//route
import{Routes,RouterModule} from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
// import{AuthGuard} from

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'login', component: LoginPageComponent },
  // { path: 'signup', component: SignupPageComponent },
  {path: '', redirectTo: '/login-page', pathMatch: 'full' },
  // {path: 'dashboard', component: DashboardPageComponent, canActivate:[AuthGaurd]}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes)


  ],
  providers: [    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
