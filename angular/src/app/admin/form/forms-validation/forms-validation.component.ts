import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
	selector: 'app-forms-validation',
	templateUrl: './forms-validation.component.html',
	styleUrls: ['./forms-validation.component.css']
})
export class FormsValidationComponent implements OnInit {

	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;
	public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};
	public data:any = {};

	constructor( private cdr: ChangeDetectorRef) {
    this.dropdownList = [
			{ item_id: 1, item_text: 'Cheese' },
			{ item_id: 2, item_text: 'Tomatoes' },
			{ item_id: 3, item_text: 'Mozzarella' },
			{ item_id: 4, item_text: 'Mushrooms' },
			{ item_id: 5, item_text: 'Pepperoni' },
			{ item_id: 6, item_text: 'Onions' }
		];
		this.selectedItems = [
			{ item_id: 3, item_text: 'Mozzarella' },
			{ item_id: 4, item_text: 'Mushrooms' }
		];
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'item_id',
			textField: 'item_text',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			allowSearchFilter: true
		};
	}

	ngOnInit() {

	}

	onSubmit(isValid: Boolean){
		if (isValid){
			// Logic to add/update data here.
		}
	}





}
