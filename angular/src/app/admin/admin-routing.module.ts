import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/components/admin/admin.component';


const routes: Routes = [
  {
      path: '',
      component: AdminComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardModule) },
          { path: 'component/ui-elements', loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule)},
          { path: 'component/forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)},
          { path: 'component/table', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)},
          { path: 'pages/sample-pages', loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)},
          { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
          { path: 'dashboard/ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
          { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
          { path: 'component/charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
          { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
