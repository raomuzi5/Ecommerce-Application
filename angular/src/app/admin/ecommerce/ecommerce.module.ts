import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcommerceRoutingModule } from './Ecommerce-routing.module';
import { AppProductComponent } from './components/product/product.component';
import { AppEcommerceMainComponent } from './components/ecommerce-main/ecommerce-main.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppEcommerceMainComponent, 
    AppProductComponent, 
    ProductDetailComponent,
     ProductListComponent, 
     ProductAddComponent,
      ProductOrderComponent, 
      ProductCartComponent, 
      ProductCheckoutComponent,
       ProductDashboardComponent
      ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    EcommerceRoutingModule,
    CoreModule,
    NgxDropzoneModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ReactiveFormsModule,
    ToastrModule.forRoot({   // ToastrModule added
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ]
})
export class EcommerceModule { }
