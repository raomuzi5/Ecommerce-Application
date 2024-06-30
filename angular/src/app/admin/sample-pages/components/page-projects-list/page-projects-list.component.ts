import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-page-projects-list',
  templateUrl: './page-projects-list.component.html',
  styleUrls: ['./page-projects-list.component.css']
})
export class PageProjectsListComponent implements OnInit {

  public visitorsOptions: EChartOption = {};
  public visitsOptions: EChartOption = {};
  public sidebarVisible: boolean = true;

  constructor( private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
