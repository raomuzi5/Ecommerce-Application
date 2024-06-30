import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { AllWidgetsComponent } from './components/all-widgets/all-widgets.component';

const routes: Routes = [
    {
        path: '',
        component: WidgetsComponent,
        children: [
            { path: '', redirectTo:'all', pathMatch: 'full'},
            { path: 'widgets', component: AllWidgetsComponent, data: { title: ':: sQuare Angular :: Widgets ::' } },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
