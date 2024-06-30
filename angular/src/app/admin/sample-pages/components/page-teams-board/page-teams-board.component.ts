import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-page-teams-board',
  templateUrl: './page-teams-board.component.html',
  styleUrls: ['./page-teams-board.component.css']
})
export class PageTeamsBoardComponent implements OnInit {

  public visitorsOptions: EChartOption = {};
  public visitsOptions: EChartOption = {};
  public sidebarVisible: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
  }




}
