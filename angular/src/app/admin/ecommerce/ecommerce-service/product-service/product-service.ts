import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductModel } from '../../Models/product-model';

@Injectable({
  providedIn: 'root' // This makes ProductService available application-wide
})
export class ProductService {
  private apiUrl = 'https://localhost:5001/api/Product'; 

  constructor(private http: HttpClient) { }

  uploadAttachment(fileName: string, fileContentBase64: string): Observable<number> {
    // Include static reference type and ID in the request body
    const requestBody = {
      fileName,
      fileContentBase64,
      referenceType: 'Product',
      referenceId: '1'
    };

    return this.http.post<number>('https://localhost:5001/api/attachment', requestBody);
  }

  // getProducts(): Observable<ProductModel[]> {
  //   return this.http.get<ProductModel[]>(this.apiUrl);
  // }
  getProducts(page: number, size: number): Observable<{ content: ProductModel[], totalPages: number }> {
    return this.http.get<{ content: ProductModel[], totalPages: number }>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
  
  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiUrl, product);
  }

  updateProduct(id: number, product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
