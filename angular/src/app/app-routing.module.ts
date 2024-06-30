import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: 'pages/authentication', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
