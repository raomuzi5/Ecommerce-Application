import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
	constructor( private cdr: ChangeDetectorRef) {

	}

	ngOnInit() {
	}

}
