import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMainComponent } from './form-main/form-main.component';
import { FormsBasicComponent } from '../form/forms-basic/forms-basic.component';
import { FormsValidationComponent } from '../form/forms-validation/forms-validation.component';

const routes: Routes = [
  {
    path: '',
    component: FormMainComponent,
    children: [
      { path: '', redirectTo: 'forms-validation', pathMatch: 'full' },
      { path: 'forms-validation', component: FormsValidationComponent, data: { title: ':: Riverra Angular :: Form Validations :: Forms ::' } },
      { path: 'forms-basic', component: FormsBasicComponent, data: { title: ':: Riverra Angular :: Form Basic :: Forms ::' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
