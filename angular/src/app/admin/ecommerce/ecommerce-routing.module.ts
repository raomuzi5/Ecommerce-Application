
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppEcommerceMainComponent } from './components/ecommerce-main/ecommerce-main.component';
import { AppProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: AppEcommerceMainComponent,
    children: [
      { path: '', redirectTo: 'Product-dashboard', pathMatch: 'full' },
      { path: 'product', component: AppProductComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-detail', component: ProductDetailComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-list', component:  ProductListComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-add', component:  ProductAddComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-order', component:  ProductOrderComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-cart', component:  ProductCartComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-checkout', component:  ProductCheckoutComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'product-dashboard', component:  ProductDashboardComponent, data: {title: ':: Riverra-Angular ::'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }

