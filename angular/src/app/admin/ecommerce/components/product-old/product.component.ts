import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class AppProductComponent implements OnInit {
  public productdataOptions:Array<any> = new Array<any>();
  status: boolean = false;

  constructor(private modalService: NgbModal) {
    this.productdataOptions = [
      {
          productbard:"PLANTERS",
          productname:"BRONE CANDLE",
          discountprice:"$25",
          orignalprice: '$47',
          productimg: 'assets/images/ecommerce/1.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/2.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/3.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/4.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/5.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/6.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/7.png'
      },
      {
        productbard:"PLANTERS",
        productname:"BRONE CANDLE",
        discountprice:"$25",
        orignalprice: '$47',
        productimg: 'assets/images/ecommerce/8.png'
      },
    ];
  }
  ngOnInit() {

  }
  clickEvent(){
    this.status = !this.status;
  }

}
