import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValidationComponent } from './forms-validation/forms-validation.component';
import { RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { FormsBasicComponent } from './forms-basic/forms-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormMainComponent } from './form-main/form-main.component';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
	declarations: [FormsValidationComponent, FormsBasicComponent, FormMainComponent],
	imports: [
		CommonModule,
		RouterModule,
		CoreModule,
    NgMultiSelectDropDownModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormRoutingModule,
		FormsModule,
		NgbModule
	]
})
export class FormModule { }
