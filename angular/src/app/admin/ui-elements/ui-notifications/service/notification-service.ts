import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showInfo(message: string) {
    this.toastr.info(message, undefined, {
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  showSuccess(message: string) {
    this.toastr.success(message, undefined, {
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  showWarning(message: string) {
    this.toastr.warning(message, undefined, {
      closeButton: true,
      positionClass: 'toast-top-right'
        });
  }

  showError(message: string) {
    this.toastr.error(message, undefined, {
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }
}
