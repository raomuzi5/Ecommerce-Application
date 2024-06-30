import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { PageLeafletComponent } from './components/page-leaflet/page-leaflet.component';

const routes: Routes = [
    {
        path: '',
        component: MapsComponent,
        children: [
            { path: '', redirectTo: 'leaflet', pathMatch: 'full' },
            { path: 'leaflet', component: PageLeafletComponent, data: { title: ':: sQuare Angular :: Maps ::' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapsRoutingModule { }
