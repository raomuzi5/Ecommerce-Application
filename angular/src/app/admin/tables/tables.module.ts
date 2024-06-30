import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableNormalComponent } from './components/table-normal/table-normal.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { TableAdvanceComponent, NgbdSortableHeader } from './components/table-advance/table-advance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [TableNormalComponent, TablesComponent, TableBasicComponent, TableAdvanceComponent, NgbdSortableHeader],
    imports: [
        CommonModule,
        TablesRoutingModule,
        NgbModule,
        CoreModule
    ]
})
export class TablesModule { }
