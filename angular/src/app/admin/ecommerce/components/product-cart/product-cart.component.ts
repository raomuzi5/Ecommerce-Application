import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input()
  counterValueone = 1;
  counterValuetwo = 1;
  counterValuethree = 1;
  counterValuefour = 1;
  constructor() { }

  ngOnInit(): void {
  }

  incrementone(){
    this.counterValueone++;
  }
  decrementone(){
    this.counterValueone--;
  }
  incrementtwo(){
    this.counterValuetwo++;
  }
  decrementtwo(){
    this.counterValuetwo--;
  }
  incrementthree(){
    this.counterValuethree++;
  }
  decrementthree(){
    this.counterValuethree--;
  }
  incrementfour(){
    this.counterValuefour++;
  }
  decrementfour(){
    this.counterValuefour--;
  }
}
