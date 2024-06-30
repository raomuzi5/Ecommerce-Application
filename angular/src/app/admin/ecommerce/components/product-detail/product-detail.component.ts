import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public results: string = "Details";
  public productImage: string = "assets/images/ecommerce/1.png";
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  changeProductImage(image:string){
		this.productImage = image;
  }

  toggleResults(selection: string) {
      this.results = selection;
  }

}
