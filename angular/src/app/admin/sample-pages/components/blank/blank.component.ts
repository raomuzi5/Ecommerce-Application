import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor() { }
  public show_div = true;

  ngOnInit() {
  }
  hideDiv() {
    this.show_div = !this.show_div;
  }
}
