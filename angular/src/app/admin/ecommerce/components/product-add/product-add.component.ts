import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, EMPTY, Observable, Subject, from, fromEvent, observable, of } from 'rxjs';
import { catchError, concatMap, debounceTime, finalize, map, mergeMap, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ProductService } from '../../ecommerce-service/product-service/product-service';
import { ProductModel } from '../../Models/product-model';
import { NotificationService } from 'src/app/admin/ui-elements/ui-notifications/service/notification-service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  files: File[] = [];
  productForm: FormGroup=this.fb.group({
    productName: ['', Validators.required],
    manufacturerName: ['', Validators.required],
    manufacturerBrand: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(1)]],
    quantity: [null, [Validators.required, Validators.min(1)]],
    category: ['', Validators.required],
    features: [''],
    description: [''],
    metaTitle: [''],
    metaKeywords: [''],
    metaDescription: [''],
    attachmentId: [null] // Ensure this field is present in the ProductModel
  }); 
  formSubmitSubject = new Subject<boolean>();
  // isLoading$: Observable<boolean>;
  readonly isLoading$ = new BehaviorSubject(false)
  readonly saveForm$ =  this.formSubmitSubject.pipe(
    switchMap(isSubmitting => {
      if (isSubmitting) {
        console.log('Form submission started');

        // Call handleFileUpload() first
        return this.handleFileUpload().pipe(
          switchMap(attachmentId => {
            // Only proceed with createProduct() if there's a valid attachmentId
            if (attachmentId !== null) {
              this.productForm.patchValue({ attachmentId });
              return this.productService.createProduct(this.productForm.value).pipe(
                tap(() => this.isLoading$.next(false)),
                catchError(error => {
                  console.error('Error during product creation', error);
                  this.toastr.showError(error.message || 'Error during product creation');
                  return of(false);
                })
              );
            } else {
              // If attachmentId is null, return false to indicate failure
              return of(false);
            }
          }),
          catchError(() => {
            this.toastr.showError('Error uploading attachment');
            return of(false);
          }),
          tap(success => {
            if (success) {
              this.toastr.showSuccess('Product saved successfully');
              this.productForm.reset();
            }
          }),
          finalize(() => {
            this.formSubmitSubject.next(false); // Emit false to indicate form submission completed
          })
        );
      } else {
        // If not submitting, return false
        return of(false);
      }
    })
  );
  base64File: string | null = null;
  product: ProductModel = {
    productName: '',
    manufacturerName: '',
    manufacturerBrand: '',
    price: 0,
    quantity: 0,
    category: '',
    features: '',
    description: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: '',
    attachmentId: null // Ensure this field is present in the ProductModel
  };
  fileUploadInProgress: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastr: NotificationService,
    private cdr: ChangeDetectorRef
  ) {}



  ngOnInit(): void {
  }
  
  saveProduct(): void {
    if (this.productForm.invalid) {
      console.log('Form is invalid');
      this.validateForm();
      return;
    }
  
    console.log('Form is valid, starting submission');
    this.isLoading$.next(true);
    this.formSubmitSubject.next(true);
  }
  
  
  handleFileUpload(): Observable<number | null> {
    if (!this.base64File) {
      return of(null); // No file selected or file conversion failed
    }
  
    const file = this.files[0];
  
    return this.productService.uploadAttachment(file.name, this.base64File).pipe(
      map(response => {
        // Assuming the response contains the attachmentId
        return response; // Adjust according to your actual response
      }),
      catchError(error => {
        console.error('Error uploading attachment', error);
        this.toastr.showError('Error uploading attachment');
        return of(null);
      }),
      finalize(() => {
        console.log('Attachment upload process completed');
      })
    );
  }
  
  
  // onFileSelect(event: any): void {
  //   this.files.push(...event.addedFiles);
  // }
  onFileSelect(event: any): void {
    this.files.push(...event.addedFiles);
  
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      this.base64File = (reader.result as string).split(',')[1];
    };
  
    reader.onerror = (error) => {
      console.error('Error converting file to base64', error);
      this.toastr.showError('Error converting file to base64');
    };
  
    reader.readAsDataURL(file);
  }
  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  validateForm(): void {
    // Object.keys(this.productForm.controls).forEach(controlName => {
    //   const control = this.productForm.get(controlName);
    //   if (control && control.invalid && (control.dirty || control.touched)) {
    //     control.markAsTouched();
    //   }
    // });
  }
}
