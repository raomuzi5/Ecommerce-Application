import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './components/maps/maps.component';
import { PageLeafletComponent } from './components/page-leaflet/page-leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
    declarations: [MapsComponent, PageLeafletComponent],
    imports: [
        CommonModule,
        MapsRoutingModule,
        LeafletModule
    ]
})
export class MapsModule { }
