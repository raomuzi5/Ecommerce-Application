import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.scss']
})
export class MailInboxComponent implements OnInit {
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  clickEvent(){
      this.status = !this.status;
  }
}
