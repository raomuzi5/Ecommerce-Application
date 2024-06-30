import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { Page404Component } from './components/page404/page404.component';
import { Page403Component } from './components/page403/page403.component';
import { Page500Component } from './components/page500/page500.component';
import { Page503Component } from './components/page503/page503.component';
import { PageOfflineComponent } from './components/page-offline/page-offline.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [{
  path: '',
  component: AuthenticationComponent,
  children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent, data: { title: ':: Riverra Angular :: Login ::' } },
      { path: 'signup', component: SignupComponent, data: { title: ':: Riverra Angular :: Signup ::' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: ':: Riverra Angular :: Forgot Password ::' } },
      { path: 'page-404', component: Page404Component, data: { title: ':: Riverra Angular :: 404 Page Not Found ::' } },
      { path: 'page-403', component: Page403Component, data: { title: ':: Riverra Angular :: 403 Page Not Found ::' } },
      { path: 'page-500', component: Page500Component, data: { title: ':: Riverra Angular :: 500 Page Not Found ::' } },
      { path: 'page-503', component: Page503Component, data: { title: ':: Riverra Angular :: 503 Page Not Found ::' } },
      { path: 'page-offline', component: PageOfflineComponent, data: { title: ':: Riverra Angular :: Page Offline ::' } },
      { path: 'page-locked', component: LockScreenComponent, data: { title: ':: Riverra Angular :: Locked ::' } }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
