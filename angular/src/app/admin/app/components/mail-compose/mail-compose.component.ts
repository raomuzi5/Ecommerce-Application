import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class MailComposeComponent implements OnInit {
  status: boolean = false;
  constructor(private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
  }
  clickEvent(){
    this.status = !this.status;
  }

}
