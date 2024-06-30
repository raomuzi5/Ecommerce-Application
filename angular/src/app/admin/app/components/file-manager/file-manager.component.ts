import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  public results: string = "Allfile";
  constructor() { }

  ngOnInit(): void {
  }
  toggleResults(selection: string) {
    this.results = selection;
  }
}
