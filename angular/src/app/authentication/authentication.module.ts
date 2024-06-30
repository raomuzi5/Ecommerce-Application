import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { Page404Component } from './components/page404/page404.component';
import { PageOfflineComponent } from './components/page-offline/page-offline.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { Page403Component } from './components/page403/page403.component';
import { Page500Component } from './components/page500/page500.component';
import { Page503Component } from './components/page503/page503.component';


@NgModule({
  declarations: [LoginComponent,SignupComponent, ForgotPasswordComponent, LockScreenComponent, Page404Component, PageOfflineComponent, AuthenticationComponent, Page403Component, Page500Component, Page503Component],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
