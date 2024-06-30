import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './components/charts/charts.component';
import { PageEChartsComponent } from './components/page-e-charts/page-e-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ChartsComponent, PageEChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxEchartsModule,
    CoreModule
  ]
})
export class ChartsModule { }
