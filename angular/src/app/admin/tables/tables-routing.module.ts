import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { TableNormalComponent } from './components/table-normal/table-normal.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { TableAdvanceComponent } from './components/table-advance/table-advance.component';

const routes: Routes = [{
    path: '',
    component: TablesComponent,
    children: [
        { path: '', redirectTo:'table-normal'},
        { path: 'table-normal', component: TableNormalComponent, data: { title: ':: Riverra Angular :: Normal Tables ::' }},
        { path: 'table-basic', component: TableBasicComponent, data: { title: ':: Riverra Angular :: Basic Tables ::' }},
        { path: 'table-advance', component: TableAdvanceComponent, data: { title: ':: Riverra Angular :: Advance Tables ::' }}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
