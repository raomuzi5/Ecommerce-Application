import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
    public results: string = "Details";
    public show_div = true;

    constructor() { }

    ngOnInit() {
    }

    toggleResults(selection: string) {
        this.results = selection;
    }

    hideDiv() {
        this.show_div = !this.show_div;
    }
}
