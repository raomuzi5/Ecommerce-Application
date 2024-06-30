import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { LayoutServiceService } from 'src/app/admin/layout/services/layout-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public themeDarkClass: string;
  private ngUnsubscribe = new Subject();
  constructor(private layoutServiceService: LayoutServiceService,private cdr: ChangeDetectorRef) {
    this.layoutServiceService.themeDarkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeDarkClass => {
     this.themeDarkClass = themeDarkClass;

  });
  }

  ngOnInit(): void {
  }

}
