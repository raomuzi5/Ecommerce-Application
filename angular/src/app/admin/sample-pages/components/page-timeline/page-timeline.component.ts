import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-page-timeline',
  templateUrl: './page-timeline.component.html',
  styleUrls: ['./page-timeline.component.css']
})
export class PageTimelineComponent implements OnInit {

	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;
	public posts: Array<any> = new Array<any>();
	public showComment: boolean = false;

	constructor(private cdr: ChangeDetectorRef) {
		this.posts = [
			{
				class: "green",
				date: "20-04-2020 - Today",
				header: "Hello, 'Im a single div responsive timeline without media Queries!",
				user: "Elisse Joson",
				location: "San Francisco, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card."
			},
			{
				class: "blue",
				date: "19-04-2020 - Yesterday",
				header: "Oeehhh, that's awesome.. Me too!",
				user: "Katherine Lumaad",
				location: "Oakland, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card."
			},
			{
				class: "warning",
				date: "21-02-2020",
				header: "An Engineer Explains Why You Should Always Order the Larger Pizza",
				user: "Gary Camara",
				location: "San Francisco, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card."
			}
		]
	}

	ngOnInit() {
	}

	toggleComment() {
		this.showComment = !this.showComment;
	}

}
