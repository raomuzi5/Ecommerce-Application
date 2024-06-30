
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {


	public sidebarVisible: boolean = true;
	public collepse: string = "collapseOne";

	constructor(private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
	}

	toggleCollepseGeneral(collepse: string) {
		if (this.collepse != collepse){
			this.collepse = collepse;
		} else {
			this.collepse = "";
		}

	}

}
