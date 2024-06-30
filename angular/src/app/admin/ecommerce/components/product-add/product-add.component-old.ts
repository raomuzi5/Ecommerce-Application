// import { Component, OnInit } from '@angular/core';
// import {ProductModel } from '../../Models/product-model';
// import {ProductService } from '../../ecommerce-service/product-service/product-service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Toast, ToastrService } from 'ngx-toastr';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { catchError, map, switchMap, tap } from 'rxjs/operators';
// // @Component({
// //   selector: 'product-add.component-old',
// //   templateUrl: './product-add.component.html',
// //   styleUrls: ['./product-add.component.scss']
// // })
// export class ProductAddComponentOld implements OnInit {
//   files: File[] = [];
//   productForm: FormGroup;
//   private formSubmitSubject = new BehaviorSubject<boolean>(false);
//   isLoading$: Observable<boolean>;
//   product: ProductModel = {
//     productName: '',
//     manufacturerName: '',
//     manufacturerBrand: '',
//     price: 0,
//     quantity: 0,
//     category: '',
//     features: '',
//     description: '',
//     metaTitle: '',
//     metaKeywords: '',
//     metaDescription: '',
//     // attachmentId: null // Ensure this field is present in the ProductModel
//   };
//   constructor(
//     private fb: FormBuilder,
//     private productService: ProductService,
//     private toastr: ToastrService) 
//     {

//     }

//   ngOnInit(): void {
//     this.productForm = this.fb.group({
//       productName: ['', Validators.required],
//       manufacturerName: ['', Validators.required],
//       manufacturerBrand: ['', Validators.required],
//       price: [null, [Validators.required, Validators.min(1)]],
//       quantity: [null, [Validators.required, Validators.min(1)]],
//       category: ['', Validators.required],
//       features: [''],
//       description: [''],
//       metaTitle: [''],
//       metaKeywords: [''],
//       metaDescription: [''],
//       attachmentId: [null] // Ensure this field is present in the ProductModel
//     });

//     this.subscribeToFormChanges();
//     this.isLoading$ = this.formSubmitSubject.pipe(
//       switchMap(isSubmitting => {
//         if (isSubmitting) {
//           return this.handleFileUpload().pipe(
//             switchMap(attachmentId => {
//               if (attachmentId !== null) {
//                 this.productForm.patchValue({ attachmentId });
//               }
//               return this.productService.createProduct(this.productForm.value).pipe(
//                 map(() => true),
//                 catchError(error => {
//                   console.error('Error saving product', error);
//                   this.toastr.error('Error saving product', undefined, {
//                     closeButton: true,
//                     positionClass: 'toast-top-right'
//                   });
//                   return of(false);
//                 }),
//                 tap((success) => {
//                   this.formSubmitSubject.next(false);
//                   if (success) {
//                     this.toastr.success('Product saved successfully', undefined, {
//                       closeButton: true,
//                       positionClass: 'toast-top-right'
//                     });
//                   }
//                 })
//               );
//             }),
//             catchError(() => {
//               this.toastr.error('Error uploading attachment', undefined, {
//                 closeButton: true,
//                 positionClass: 'toast-top-right'
//               });
//               return of(false);
//             })
//           );
//         }
//         return of(false);
//       })
//     );
//   }

//   subscribeToFormChanges(): void {
//     this.productForm.valueChanges.subscribe(() => {
//       this.validateForm();
//     });
//   }
//   validateForm(): void {
//     Object.keys(this.productForm.controls).forEach(controlName => {
//       const control = this.productForm.get(controlName);
//       if (control && control.invalid && (control.dirty || control.touched)) {
//         control.markAsTouched();
//       }
//     });
//   }
//   onFileSelect(event: any): void {
//     this.files.push(...event.addedFiles);
//   }

//   onRemove(event: any): void {
//     this.files.splice(this.files.indexOf(event), 1);
//   }

//   saveProduct(form: FormGroup) {
//     if (form.invalid) {
//       return;
//     }
//     this.formSubmitSubject.next(true);
//   }
  
//   // saveProduct(form: FormGroup): void {
//   //   if (form.invalid) {
//   //     Object.keys(form.controls).forEach(controlName => {
//   //       form.controls[controlName].markAsTouched();
//   //     });
//   //     return;
//   //   }

//   //   this.product = {
//   //     ...form.value, // Using spread operator to copy form values
//   //     attachmentId: null // Ensure this field is present in the ProductModel
//   //   };
  
//   //   if (this.files.length > 0) {
//   //     const file = this.files[0];
//   //     const reader = new FileReader();
//   //     reader.readAsDataURL(file);
//   //     reader.onload = () => {
//   //       const base64File = (reader.result as string).split(',')[1]; // Get the base64 string without the prefix
//   //       this.productService.uploadAttachment(file.name, base64File).subscribe((attachmentId: number) => {
//   //         this.product.attachmentId = attachmentId;
//   //         this.createProduct();
//   //       });
//   //     };
//   //   } else {
//   //     this.createProduct();
//   //   }
    
//   // }

//   // createProduct(): void {
//   //   this.productService.createProduct(this.product).subscribe(response => {
//   //     console.log('Product saved successfully', response);
//   //     this.toastr.success("Product saved successfully",undefined,{
//   //       closeButton:true,
//   //       positionClass:'toast-top-right'
//   //     });

//   //    setTimeout(() => {
//   //       this.isLoading = false;
//   //     }, 1500);
//   //   });
//   // }
//   handleFileUpload(): Observable<number | null> {
//     if (this.files.length > 0) {
//       const file = this.files[0];
//       const reader = new FileReader();
//       const result$ = new BehaviorSubject<number | null>(null);
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         const base64File = (reader.result as string).split(',')[1]; // Get the base64 string without the prefix
//         this.productService.uploadAttachment(file.name, base64File).subscribe(
//           (attachmentId: number) => {
//             result$.next(attachmentId);
//             result$.complete();
//           },
//           error => {
//             console.error('Error uploading attachment', error);
//             result$.next(null);
//             result$.complete();
//           }
//         );
//       };
//       return result$.asObservable();
//     } else {
//       return of(null);
//     }
//   }
// }
