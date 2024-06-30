import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { AllWidgetsComponent } from './components/all-widgets/all-widgets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
    declarations: [WidgetsComponent, AllWidgetsComponent],
    imports: [
        CommonModule,
        WidgetsRoutingModule,
        CoreModule,
        NgbModule,
        NgxEchartsModule.forRoot({
          echarts,
        }),
    ]
})
export class WidgetsModule { }
