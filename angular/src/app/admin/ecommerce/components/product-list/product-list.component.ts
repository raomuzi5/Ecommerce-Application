// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../Models/product-model';
import { ProductService } from '../../ecommerce-service/product-service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ProductModel[]>;
  totalPages$: Observable<number>;
  page: number = 1;
  size: number = 10;
  private pageSubject = new BehaviorSubject<number>(this.page);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const productData$ = this.pageSubject.pipe(
      switchMap(page => this.productService.getProducts(page, this.size))
    );

    this.products$ = productData$.pipe(
      switchMap(data => data.content)
    );

    this.totalPages$ = productData$.pipe(
      switchMap(data => data.totalPages)
    );
  }

  onPageChange(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.page = page;
      this.pageSubject.next(this.page);
    }
  }
}
