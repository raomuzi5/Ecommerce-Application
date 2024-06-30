import { Component, OnInit,ChangeDetectorRef } from '@angular/core';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ui-notifications',
  templateUrl: './ui-notifications.component.html',
  styleUrls: ['./ui-notifications.component.css']
})
export class UiNotificationsComponent implements OnInit {


  public sidebarVisible:boolean = true;

  constructor(private toastr: ToastrService,private cdr:ChangeDetectorRef) {

    this.toastr.info('Hi there, this is notification demo.',undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  ngOnInit() {
  }

  showInfo() {
    this.toastr.info('This is general theme info',undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  showSuccess() {
    this.toastr.success('This is success info',undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  showWarning() {
    this.toastr.warning('This is warning info',undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  showError() {
    this.toastr.error('This is error info',undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  showBottomRight() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-bottom-right'
    });
  }

  showBottomLeft() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-bottom-left'
    });
  }

  showTopLeft() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-top-left'
    });
  }

  showTopRight() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-top-right'
    });
  }

  showTopFull() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-top-full-width'
    });
  }

  showBottomFull() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-bottom-full-width'
    });
  }

  showTopCenter() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-top-center'
    });
  }

  showBottomCenter() {
    this.toastr.info("Hi, I'm here",undefined,{
      closeButton:true,
      positionClass:'toast-bottom-center'
    });
  }


}

export { ToastrService };
